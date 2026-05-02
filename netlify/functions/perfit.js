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

  console.log('Enviando a Perfit:', email, firstName);

  var response = await fetch('https://api.myperfit.com/v2/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer minaaccesorio-1VTyG75vwmiCBq6mz8yNZc1enhWdHa2n'
    },
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      lists: [4]
    })
  });

  var text = await response.text();
  console.log('Respuesta Perfit status:', response.status);
  console.log('Respuesta Perfit body:', text);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: text
  };
};
