const registredUserCollection = require("../model/userModel");
const getAllUsers = async (request, response)=>{
const findAllUsers = await registredUserCollection.find({});
return response.send(findAllUsers)
}
module.exports = {getAllUsers}