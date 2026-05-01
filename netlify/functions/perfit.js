exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  var body = JSON.parse(event.body);
  var email = body.email;
  var firstName = body.firstName;

  var response = await fetch('https://api.myperfit.com/v2/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer minaaccesorio-bAu5jcaK4hd2WCOnUx4YWsyIAgrj8iHs'
    },
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      lists: [4]
    })
  });

  var data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)
  };
};
