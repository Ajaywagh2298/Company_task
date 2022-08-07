const {getContactCRM} = require('../crm/contacts')
const {getContactDB} = require('../db/contacts')

async function getContact(request, response) {
    const data_store = request.query.data_store;

    if (data_store == 'DATABASE') {
        await getContactDB(request, response)
    } else if (data_store == 'CRM') {
        await getContactCRM(request, response)
    } else {
        console.log('Invalid Parameters')
        response.send({
            message: 'data not found'
        });
    }

}

module.exports = {getContact}