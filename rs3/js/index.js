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
    const boxwidth = 300;
    const boxheight = 500;

    const maxwidth = window.width;

    let itemnum;
    let gridhtml = `
      <div class="item">
        <div class="tableitem itemname"><span style="font-weight: bold">NAME</span></div>
        <div class="tableitem itemid"><span style="font-weight: bold">ITEM ID</span></div>
        <div class="tableitem itemimg"><span style="font-weight: bold">ICON</span></div>
        <div class="tableitem itemprice"><span style="font-weight: bold">PRICE</span></div>
      </div>`;
    for (let i = 1; i <= data.num_items; i++) {
      itemnum = `item${i}`;
      gridhtml += `
        <div class="item">
          <div class="tableitem itemname"><span>${data[itemnum].name}</span></div>
          <div class="tableitem itemid"><span>${data[itemnum].id}</span></div>
          <div class="tableitem itemimg"><img src="${data[itemnum].icon}"></div>
          <div class="tableitem itemprice"><span>${data[itemnum].price}</span></div>
        </div>`
    }

    console.log(gridhtml)
    document.getElementById("gridcontainer").innerHTML = gridhtml;
  });