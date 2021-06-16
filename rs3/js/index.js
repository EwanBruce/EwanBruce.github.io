ore = URL('https://secure.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=440');
document.getElementById('price').innerHTML = `PRICE: ${ore.item.current.price}`;