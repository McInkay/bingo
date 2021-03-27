exports.handler = async function(event, context, callback) {
    const https = require('https');

    https.get('https://www.fife.gov.uk/api/citizen?preview=false&locale=en', (resp) => {
        const auth = resp.headers.authorization;
        const data = '{\"name\":\"bin_calendar\",\"data\":{\"uprn\":\"320129175\"},\"email\":\"\",\"caseid\":\"\",\"xref\":\"\",\"xref1\":\"\",\"xref2\":\"\"}';

        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': auth
            }
        }
        
        const req = https.request('https://www.fife.gov.uk/api/custom?action=powersuite_bin_calendar_collections&actionedby=bin_calendar&loadform=true&access=citizen&locale=en', options, res => {      
            res.on('data', d => {
                const collections = JSON.parse(d).data.tab_collections;
                let next = collections[0].colour;
                if (collections[1].date === collections[0].date) {
                    next += ` and ${collections[1].colour}`;
                }
                callback(next);
            })
        })
        
        req.on('error', error => {
            console.error(error)
        })
        
        req.write(data)
        req.end()

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
}