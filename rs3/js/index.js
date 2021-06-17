var data
// Example POST method implementation:
async function postData(url = './itemdb.json', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('./itemdb.json', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
    document.getElementById("price").innerHTML = data.item1.price;
    populategrid();
  });

function pupulategrid() {
  const boxwidth = 300;
  const boxheight = 500;

  const maxwidth = window.width;

}