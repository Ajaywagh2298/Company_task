const config = require("../../config");
const axios = require("axios");

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Token token=${config.TOKEN}`
}

async function getContacts(request, response) {
    const id = request.params.id;

    const result = await axios.get(`${config.CRM_URL}/${id}`, {headers: headers})

    if(result.data.error.code == 404) {
        response.send({
            status: 404,
            body: result.data.error.message
        });
    }
    const res = {
        "id": result.data.id,
        "first_name": result.data.first_name,
        "last_name": result.data.last_name,
        "email": result.data.email,
        "mobile_number" : result.data.mobile_number,
    }

    response.send({
        status: 200,
        body: res
    });

    console.log(result.data)
}

async function createContact(request, response) {
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;

    const result = await axios.post(`${config.CRM_URL}`, {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "mobile_number": mobile_number,
    }, {headers: headers})

    const res = {
        "id": result.data.id,
        "first_name": result.data.first_name,
        "last_name": result.data.last_name,
        "email": result.data.email,
        "mobile_number" : result.data.mobile_number,
    }
    response.send({
        status: 200,
        body: res
    })
}

async function updateContact(request, response) {
    const id = request.params.id;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;

    const result = await axios.put(`${config.CRM_URL}/${id}`, {
        "email": email,
        "mobile_number": mobile_number,
    }, {headers: headers})
    response.send({
        status: 200,
        body: result.data
    })
}

async function deleteContact(request, response) {
    const id = request.params.id;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Token token=${config.TOKEN}`
    }
    const result = await axios.delete(`${config.CRM_URL}/${id}`, {headers: headers});
    response.send({
        status: 204,
        message: 'Contact deleted Successfully ',
        body: result.data
    })
}

module.exports = {getContactCRM: getContacts, createContactCRM: createContact, updateContactCRM: updateContact, deleteContactCRM: deleteContact}
