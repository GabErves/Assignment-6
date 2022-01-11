const fetch = require("node-fetch");

const USER_ID = process.env.REACT_APP_USERID;
const BASE_URI =
  "http://production.shippingapis.com/ShippingAPITest.dll?API=CityStateLookup&XML=";
const config = {
  headers: {
    "Content-Type": "text/xml",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET",
  },
  method: "get",
};

const handler = async function () {
  try {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
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
