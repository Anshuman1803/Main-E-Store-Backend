const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
dotENV.config();
const adminCollection = require("../model/AdminModel");

const adminLogin = async (request, response) => {
    const tempUser = request.body;
    let findUser = await adminCollection.find({ userEmail: { $eq: tempUser.userEmail } });

    if (findUser.length === 0) {
        return response.send({ resMsg: "Admin Not Registred" });
    }
    const userAuthenticaticated = bcrypt.compareSync(tempUser.userPassword, findUser[0].userPassword);

    if (userAuthenticaticated) {
        return response.send({ resMsg: "Admin Logged In Successfully", "adminDetails": findUser });
    } else {
        return response.send({ resMsg: "Password is not Correct" });
    }
}

module.exports = { adminLogin }