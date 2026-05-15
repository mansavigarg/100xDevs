// this is example of callback hell

fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    .then(function(response){
        response.text()
            .then(function(ans){
                document.getElementById("finalSum").innerHTML = ans;
            })
    });

// promis chaining

fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    .then(function(response){
        return response.text()
    }).then(function(ans){
        document.getElementById("finalSum").innerHTML = ans;
    });



// to serch topic :-->>> cors 
// const cors = require('cors');

// app.use(cors())

 