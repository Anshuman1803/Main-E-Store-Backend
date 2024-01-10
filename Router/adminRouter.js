const route = require("express").Router();
const { addnewProduct } = require("../controller/AddNewProduct");
const { adminLogin } = require("../controller/AdminLogin")
const { deleteProduct } = require("../controller/DeleteProduct")
const { getAllUsers } = require("../controller/GetAllUserCtrl");
const { getCartItems } = require("../controller/GetCartitems");
const bcrypt = require("bcrypt");
const saltRound = 10;
const adminCollection = require("../model/AdminModel");
route.post("/login", adminLogin)
route.post("/add-product", addnewProduct)
route.post("/deleteproduct/:id", deleteProduct)
route.get("/allUsers", getAllUsers);
route.get('/cartItems', getCartItems);


route.patch("/update-password", async (request, response) => {
    const tempUser = request.body;

    if (tempUser.validUser) {
        //hashing password using bcrypt
        tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

        let mongooseResponse = await adminCollection.updateOne({ userEmail: tempUser.userEmail }, { userPassword: tempUser.userPassword });

        if (mongooseResponse.acknowledged) {

            response.send({ resMsg: "Password Updated" })
        } else {
            response.send({ resMsg: "Something Went Wrong." })
        }
    } else {

        let IsRegistred = await adminCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });

        if (IsRegistred) {

            //hashing password using bcrypt
            tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

            let mongooseResponse = await adminCollection.updateOne({ userEmail: tempUser.userEmail }, { userPassword: tempUser.userPassword });

            if (mongooseResponse.acknowledged) {
                response.send({ resMsg: "Password Updated" })
            } else {
                response.send({ resMsg: "Something Went Wrong." })
            }

        } else {
            return response.send({ resMsg: "User Not Registred" });
        }

    }

})

module.exports = route