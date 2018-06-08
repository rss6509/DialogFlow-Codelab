const functions = require('firebase-functions');

exports.webhook = functions.https.onRequest((request, response) => {
    
        console.log("Cloud Function Called Successfully");
        response.send("Hello World from Cloud Functions");
    });
    