const {updateContactDB} = require('../db/contacts')
const {updateContactCRM} = require('../crm/contacts')

async function updateContact(request, response) {
    const data_store = request.query.data_store;

    if (data_store == 'DATABASE') {
        await updateContactDB(request, response);
    } else if (data_store == 'CRM') {
        await updateContactCRM(request, response);
    } else {
        response.send({
            message: 'invalid data_store',
            status: 400
        })
    }
}

module.exports = {updateContact};