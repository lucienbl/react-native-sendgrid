const CONFIG = {
    SENDGRIDURL:"https://api.sendgrid.com/v3/mail/send"
}

function sendGridEmail(key, to, from, subject, body, type="text/plain"){
    return sendEmail(key, to, from, subject, body, type);
}

function sendEmail(key, to, from, subject, body, type) { 
    return fetch(CONFIG.SENDGRIDURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify({
            "personalizations": [
              {
                "to": [
                  {
                    "email": to
                  }
                ],
                "subject": subject
              }
            ],
            "from": {
              "email": from
            },
            "content": [
              {
                "type": type,
                "value": body
              }
            ]
          }),
    }).then((response) => {
        return response;
    }).catch((error) =>{
        return false; 
    });
}


exports.sendGridEmail = sendGridEmail
