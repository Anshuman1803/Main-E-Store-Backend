const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
const JWT = require("jsonwebtoken");
dotENV.config();
const KEY = process.env.secretKey;
const registredUserCollection = require("../model/userModel");

const userLogin = async (request, response) => {
    const tempUser = request.body;
    let findUser = await registredUserCollection.find({ userEmail: { $eq: tempUser.userEmail } });

    if (!findUser) {
        return response.send({ resMsg: "User Not Registred" });
    }
    const userAuthenticaticated = bcrypt.compareSync(tempUser.userPassword, findUser[0].userPassword);

    if (userAuthenticaticated) {
        const generatedToken = JWT.sign({ "USER": tempUser.userEmail }, KEY, { expiresIn: "9000" });
        return response.send({ resMsg: "User Logged In Successfully", "Your_TOKEN": generatedToken, "UserDetails": findUser });
    } else {
        return response.send({ resMsg: "Password is not Correct" });
    }
}

module.exports = { userLogin }