import requests
import json
import time

#import list of item ids from item_list.json

id_list = [440, 2351, 44646, 1944]

#print(item_list)

#or i in item_list
#id_list = item_list.items.id

#receive data for item from runescape server and write relevant data to itemdb.json

num_items = len(id_list)
i = 0
itemdb = ''
for item_id in id_list:
    i+=1
    url = "https://secure.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=" + str(item_id)
    print(url)
    response = requests.get(url)
    item_data = json.loads(response.text)

    name = "\'" + "item" + str(i) + "\': "
    itemdb += (name + str({
        'id': item_id, 
        'name': item_data['item']['name'], 
        'price': item_data['item']['current']['price'], 
        'icon': item_data['item']['icon_large'] 
    }
    ))
    if (i!=num_items):
        itemdb += ', '

seconds = time.time()
date = time.ctime(seconds)

itemdb = " \"date\": \"" + str(date) + "\"" + ", " + " \"num_items\": " + str(num_items)  + ", " + itemdb
itemdb = '{' + itemdb + '}'
print(itemdb)

seconds = time.time()
date = time.ctime(seconds)
print(date)

f = open("itemdb.json", "w")
f.write(itemdb.replace("\'", "\""))
f.close()