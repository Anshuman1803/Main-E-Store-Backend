const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
dotENV.config();
const KEY = process.env.secretKey;
const saltRound = 10;
const adminCollection = require("../model/AdminModel");

const adminLogin = async (request, response) => {
    const tempUser = request.body;
    let findUser = await adminCollection.find({ adminEmail: { $eq: tempUser.adminEmail } });

    if (!findUser) {
        return response.send({ resMsg: "Admin Not Registred" });
    }
    const userAuthenticaticated = bcrypt.compareSync(tempUser.adminPassword, findUser[0].adminPassword);

    if (userAuthenticaticated) {
        return response.send({ resMsg: "Admin Logged In Successfully", "adminDetails" : findUser});
    } else {
        return response.send({ resMsg: "Password is not Correct" });
    }
}

module.exports = { adminLogin }