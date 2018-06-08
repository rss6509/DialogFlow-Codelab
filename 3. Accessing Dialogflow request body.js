const functions = require('firebase-functions');

exports.webhook = functions.https.onRequest((request, response) => {
    
        console.log("Request Parameters ", request.body.result.parameters);
    
        let params = request.body.result.parameters;
    
        response.send({
            speech:
                `${params.name} your hotel booking request for ${params.RoomType} room is forwarded for
                 ${params.persons} persons, we will contact you on ${params.email} soon`
        });
    });
    