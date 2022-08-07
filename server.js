const express = require('express');
const db = require('./src/db/connection');
const cors = require('cors')
const bodyparser = require('body-parser')

const {createContact} = require('./src/api/post')
const {getContact} = require('./src/api/get')
const {updateContact} = require('./src/api/put')
const {deleteContact} = require('./src/api/delete')
const app = express();

app.use(cors())
app.use(bodyparser.json())
const port = 9000;


app.post('/createContact', async (request, response) => {
    await createContact(request, response);
})

app.get('/getContact/:id', (request, response) => {
    getContact(request, response);
})

app.put('/updateContact/:id', (request, response) => {
    updateContact(request, response)
})

app.delete('/deleteContact/:id', (request, response) => {
    deleteContact(request, response)
})
app.listen(port, () => {
    console.log(`Server is Running .... http://localhost:${port}`)
});
