const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const itemdata = JSON.parse(this.responseText);
  document.getElementById("price").innerHTML = itemdata.item.current.price;
}
xmlhttp.open("GET", "https://secure.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=440");
xmlhttp.withCredentials = true;
xmlhttp.setRequestHeader = *;
xmlhttp.send();