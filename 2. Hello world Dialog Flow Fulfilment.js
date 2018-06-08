const functions = require('firebase-functions');

exports.webhook = functions.https.onRequest((request, response) => {
    
        console.log("Call From DialogFlow ");
    
        response.send({
            speech:
                `This is a response from Firebase Cloud Functions`
        });
    });
    