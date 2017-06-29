const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use(express.static('.'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/send', function (req, res) {

    var data = req.body;
    var requestData = {
        text: JSON.stringify(data)
    };

    var botRequest = JSON.stringify(requestData);

    console.log(botRequest);

    var url = 'https://integram.org/caOEKLvbG7c';
    request({
        url: url,
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: botRequest
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
             console.log(response.statusMessage)
        } else {

             console.log("error: " + error);
             console.log("response.statusCode: " + response.statusCode);
             console.log("response.statusText: " + response.statusText);
        }
    });


    res.send('POST request to the homepage')
});

app.listen(3000, function () {
     console.log('Example app listening on port 3000!')
});