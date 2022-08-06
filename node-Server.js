const express =  require('express');
const  db  = require('./db');
const cors = require('cors')
const bodyparser = require('body-parser')
const { createContact } = require('./contact-CRUD/post')
const { v4: uuidv3 } = require('uuid');
const app = express();
app.use(cors())
app.use(bodyparser.json())


app.post('/createContact', (request, response) => {
   createContact(request,response);
})
app.listen(8081,()=>{
    console.log('Server is Running ....')
});
