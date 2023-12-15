const bcrypt = require("bcrypt");
const dotENV = require("dotenv");
dotENV.config();
const saltRound = 10;
const adminCollection = require("../model/AdminModel");

const adminPasswordUpdate = async (request, response) => {
    const tempUser = request.body;
    let findUser = await adminCollection.find({ userEmail: { $eq: tempUser.userEmail } });

    if (findUser.length === 0) {
        return response.send({ resMsg: "Admin Not Registred" });
    }

    let updatedPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

    const Isupdated = await adminCollection.findOneAndUpdate({ userEmail: tempUser.userEmail }, { $set: { userPassword: updatedPassword } })
    if (Isupdated) {
        return response.send({ resMsg: "Updated Successfully", "adminDetails": Isupdated });
    } else {
        return response.send({ resMsg: "Something Went Wrong" });
    }
}
module.exports = { adminPasswordUpdate }
