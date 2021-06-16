import data from 'https://secure.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=440';
document.getElementById('price').innerHTML = `PRICE: ${data.item.current.price}`;