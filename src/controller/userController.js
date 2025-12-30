const response = require('../../response');

const getAllUser = (req, res) => {
    response(200 ,"API get all user ready to go","success",res)
}

const createUser = (req, res) => {
    response(200 ,"API post ready to go","success",res)
}

module.exports = {
    getAllUser,
    createUser
}