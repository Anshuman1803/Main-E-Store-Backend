const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
const JWT = require("jsonwebtoken");
dotENV.config();
const KEY = process.env.secretKey;
const saltRound = 10;
const registredUserCollection = require("../model/userModel");

const userRegister = async (request, response) => {
    let tempUser = request.body;
    let IsRegistred = await registredUserCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });

    if (IsRegistred) {
        return response.send({ "resMsg": "User Already Exists" });
    } else {

        //hashing password using bcrypt
        tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

        // saving new user in database
        const registredResult = await registredUserCollection.create(tempUser);
        if (registredResult) {
            // generating JWT token for every new user who try to registred with our website
            const generatedToken = JWT.sign({ "USER": tempUser.userEmail }, KEY);

            // sending response back to client 
            return response.send({ resMsg: "User Registred Successfully", "Your_TOKEN": generatedToken });
        } else {
            return response.send({ resMsg: "Something Went Wrong, Try Again" });
        }

    }


}
module.exports = { userRegister }



