const  db  = require('../db');
const { v4: uuidv3 } = require('uuid');

function createContact(request, response){
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const mobile_number = request.body.mobile_number;
    const data_store = request.body.data_store;
    if(data_store == '1'){
        const quy  = `insert into contact(first_name,last_name,email,mobile_number,data_store)values('${firstName}','${lastName}','${email}','${mobile_number}','${data_store}')`;
        console.log(quy)
        db.query(quy,(err,res)=>{
            if(err){console.log(err);}
            if(res){
                response.send({
                    status: 200,
                    message:'data inserted',
                });
            }else{
                response.send({
                    status: 404,
                    message:'wrong',
                });
            }
        })
    }else if(data_store == '2'){
        
    }else{
        response.send({
            status: 404,
            message:'wrong parameter',
        })
    }


}

module.exports = { createContact };