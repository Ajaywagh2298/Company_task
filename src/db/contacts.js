const db = require('./connection');

async function getContact(request, response) {
    const id = request.params.id;
    db.query(`select *
                  from contact
                  where contact_id = ${id}`, (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result && result.length > 0) {
            response.send({
                message: 'get single data',
                data: result
            });
        } else {
            response.send({
                message: 'data not found'
            });
        }
    })
}

function createContact(request, response) {
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;
    const data_store = request.body.data_store;

    const quy = `insert into contact(first_name, last_name, email, mobile_number, data_store)
                     values ('${first_name}', '${last_name}', '${email}', '${mobile_number}', '${data_store}')`;
    console.log(quy)
    db.query(quy, (err, res) => {
        if (err) {
            console.log(err);
        }
        if (res) {
            response.send({
                status: 200,
                message: 'data inserted',
            });
        } else {
            response.send({
                status: 404,
                message: 'wrong',
            });
        }
    })
}

function deleteContact(request, response) {
    const id = request.params.id;
    db.query(`DELETE
                  FROM contact
                  WHERE contact_id = '${id}'`, ((err, result) => {
        if (err) {
            console.log(err);
        }
        response.send({
            status: 204,
            message: 'Contact deleted Successfully'
        })
    }))
}

function updateContact(request, response) {
    const id = request.params.id;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;
    const quy = `UPDATE contact
                     SET email='${email}',
                         mobile_number='${mobile_number}'
                     WHERE contact_id = '${id}'`;
    db.query(quy, (err, result) => {
        if (err) {
            console.log(err);
        }
        response.send({
            message: 'data updated'
        });
    })

}

module.exports = {getContactDB: getContact, createContactDB: createContact, deleteContactDB: deleteContact, updateContactDB: updateContact};