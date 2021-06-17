import requests
import json

#import list of item ids from item_list.json

id_list = [440, 2351, 1944]

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
        'icon': item_data['item']['icon'] 
    }
    ))
    if (i!=num_items):
        itemdb += ', '

itemdb = " \"num_items\": " + str(num_items)  + ", " + itemdb
itemdb = '{' + itemdb + '}'
print(itemdb)

#with open("itemdb.json", "w") as outfile:
    #json.dump(itemdb, outfile)

f = open("itemdb.json", "w")
f.write(itemdb.replace("\'", "\""))
f.close()