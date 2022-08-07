const {deleteContactDB} = require('../db/contacts')
const {deleteContactCRM} = require('../crm/contacts')

async function deleteContact(request, response) {
    const data_store = request.query.data_store;


    if (data_store == 'DATABASE') {
        await deleteContactDB(request, response)
    } else if (data_store == 'CRM') {
        await deleteContactCRM(request, response)
    } else {
        response.send({
            status: 500,
            message: 'Invalid data'
        })
    }
}

module.exports = {deleteContact};