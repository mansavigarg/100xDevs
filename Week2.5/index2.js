const express = require('express');
const app = express();


var users = [{
    name : "Michael",
    kidneys: [{
        healthy: true
        }, {
        healthy: false
    }]
}]

app.use(express.json());

console.log(users[0].kidneys[0].healthy) // false


// popular input type when sending get request ---> query parameter
app.get("/", (req, res) => {
    const michaelKidneys = users[0].kidneys;
    const numberOfKidneys = michaelKidneys.length;
    let numberOfHealthyKidneys = 0 ;
    for (let i = 0 ; i < numberOfKidneys; i++){
        if(michaelKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    let numberOfUnhealthyKindeny = numberOfKidneys - numberOfHealthyKidneys;


    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKindeny
    })
    console.log(numberOfKidneys);
    // MichaelKidneys.forEach(kidney => {
    //     if(kidney.healthy) {
    //         numberOfHealthyKidneys++;
    //     }
    // }); 
});



// popular input type when sending post request ---> body parameter
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done"
    })
});




app.put("/", (req, res) => {
    for(let i = 0 ; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true ;
    }
    res.json({
        msg:"Done putting"
    })
});




// removing all unhealthy kidney
app.delete("/", (req, res) => {
    if(isThereAtLeastOneUnhealthyKidney()){
        const newkidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy: true 
                })
            }
        } 
        users[0].kidneys = newkidneys;
        res.json({msg: "delete done"});
    }else{
        res.status(411).json({
            msg : "no unhealthy kidney you have"
        })
    }

});

function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false ;
    for (let i = 0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney= true;
        }
    }
    return atLeastOneUnhealthyKidney;
}


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
