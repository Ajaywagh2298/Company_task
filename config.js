const dotenv = require("dotenv")

dotenv.config()

exports.TOKEN=process.env.token
exports.CRM_URL=process.env.baseUrl+process.env.baseContext