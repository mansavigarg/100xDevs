import express from 'express';
import {Client} from '../node_modules/@types/pg/index.js';


const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_gVL1lSykM3hF@ep-odd-dream-aq1477yl-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
const pgClient2 = new Client({
    user: "neondb_owner",
    password: "npg_gVL1lSykM3hF",
    port: 5432,
    host: "ep-odd-dream-aq1477yl-pooler.c-8.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})


const main = async () => {
    try {
        await pgClient2.connect()
        console.log("pg got connected")
        // const result = await pgClient2.query("UPDATE users SET username='manu' WHERE id=2");
        // console.log(result.rows)
    }catch(err){
        console.log("pg not connected" + err)
    }
}
main();



app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;



    await pgClient2.query("BEGIN")
    // * this can cause sql injection as user can send sql queries in form of password and it will be appended at the last and then it will be executed.
    const result = await pgClient2.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);
    // console.log(result)
    // * to prevent sql injection we use syntex : now the password is never appended at end of query.
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`
    const result2 = await pgClient2.query(insertQuery, [username, email, password])


    // * to get the user id of the user we just created we can use the returning keyword in insert query and then we can get the user id from the result.
    const insertAddressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`
    const result3 = await pgClient2.query(insertAddressQuery, [city, country, street, pincode, result2.rows[0].id])

    await pgClient2.query("COMMIT")


    
    res.json("User created successfully")
})



app.get("/metadata", async (req, res) => {
    const id = req.query.id

    // // BAD approach
    // const query1 = `SELECT * FROM users WHERE id=$1`;
    // const response1 = await pgClient2.query(query1, [id]);

    // const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    // const response2 = await pgClient2.query(query2, [id]);

    // res.json({
    //     user: response1.rows[0],
    //     address: response2.rows[0]
    // })

    // Good Approach
    const query = `SELECT * FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id=$1`
    const response = await pgClient2.query(query, [id]);
    res.json(response.rows[0])
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})