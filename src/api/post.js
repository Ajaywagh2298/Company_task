const {createContactDB} = require('../db/contacts')
const {createContactCRM} = require('../crm/contacts')

async function createContact(request, response) {
    const data_store = request.body.data_store;

    if (data_store == 'DATABASE') {
        await createContactDB(request, response);
    } else if (data_store == 'CRM') {
        await createContactCRM(request, response);
    } else {
        response.send({
            status: 400,
            message: 'bad request',
        })
    }


}

module.exports = {createContact};