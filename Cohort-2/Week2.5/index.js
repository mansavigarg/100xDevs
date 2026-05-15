const express = require('express');

function calculateSum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans += i;
    }
    return ans;
}

const app = express();

// req, res => request and response
app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
