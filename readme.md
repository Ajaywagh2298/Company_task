# Back_End
All API Details

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install folder or Use follow command.

```bash
npm install express
```
```bash
npm install cors
```
```bash
npm install nodemon
```
```bash
npm install mysql2
```
```bash
npm install body-parser
```
```bash
npm install axios
```
## or
```bash
npm install
```
# Usage
##Run Backend Folder

```bash
node server.js
```
OR 
```bash
nodemon server.js
```
#API TABLE
| Method | URL                                                     | Parameters                                            |
|--------|---------------------------------------------------------|-------------------------------------------------------|
| GET    | localhost:9000/getContact/id?data_store=:data_store     | { pathParams : contact_id , queryParams: data_store } |
| POST   | localhost:9000/createContact                            | Null                                                  |
| PUT    | localhost:9000/updateContact/id?data_store=:data_store  | { pathParams : contact_id , queryParams: data_store } |
| DELETE | localhost:9000/deleteContact/70041830205?data_store=CRM | { pathParams : contact_id , queryParams: data_store } |


# Usage

## GET API 
```bash
URL : localhost:9000/getContact/:id?data_store=:data_store
Path Parameters : { id : contact_id },
Query parameters : { data_store : data_store } [DATABASE, CRM],
Response : {
    "message": "get single data",
    "data": [
        {
            "contact_id": 12,
            "first_name": "Aja4y",
            "last_name": "Wagh",
            "email": "ajay@host.com",
            "mobile_number": "2147483647",
            "data_store": "1"
        }
    ]
}
```

## POST API
```bash
URL : localhost:9000/createContact
Body : {
        "first_name" : "user",
        "last_name" : "user",
        "email":"user3@gmail.com",
        "mobile_number": "955923875557",
        "data_store": "DATABASE"
    },
Response : {
      "status": 200,
    "message": "data inserted"
}
```

## PUT API
```bash
URL : localhost:9000/updateContact/:id?data_store=:data_store
Path Parameters : { id : contact_id },
Query parameters : { data_store : data_store } [DATABASE, CRM],
Body : {
        "email":"user3@gmail.com",
        "mobile_number": "9559275557",
    },
Response : {
      "status": 200,
    "message": "data updated"
}
```


## DELETE API
```bash
URL : localhost:9000/deleteContact/:id?data_store=data_store
Path Parameters : { id : contact_id },
Query parameters : { data_store : data_store } [DATABASE, CRM],
Response : {
    "status": 204,
    "message": "Contact deleted Successfully"
}
```

