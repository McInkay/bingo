const fetch = require('node-fetch')

const handler = async function () {
  try {
    const response = await fetch('https://www.fife.gov.uk/api/citizen?preview=false&locale=en', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const auth = response.headers.get('authorization')

    const data = await fetch('https://www.fife.gov.uk/api/custom?action=powersuite_bin_calendar_collections&actionedby=bin_calendar&loadform=true&access=citizen&locale=en', {
        method: 'post',
        body:    '{\"name\":\"bin_calendar\",\"data\":{\"uprn\":\"320129175\"},\"email\":\"\",\"caseid\":\"\",\"xref\":\"\",\"xref1\":\"\",\"xref2\":\"\"}',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth },
    })
    .then(res => res.json())

    const collections = data.data.tab_collections;
    let next = collections[0].colour;
    if (collections[1].date === collections[0].date) {
        next += ` and ${collections[1].colour}`;
    }

    const { API_TOKEN } = process.env

    fetch('https://api.pushbullet.com/v2/pushes', {
      method: 'post',
      body: JSON.stringify({
        "type": "note",
        "title": `Bin: ${next}`
      }),
      headers: { 'Content-Type': 'application/json', 'Access-Token':  API_TOKEN },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ next: next }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
