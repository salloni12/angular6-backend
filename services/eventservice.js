var event = require("../models/event");



module.exports = (req, res) => {

    return {
        LoadData: (req, res) => {
            console.log("i am in load data block")

            event.find({}, (err, data) => {

                if (err) {
                    res.status('400').send(err);
                }
                else {
                    res.send(data);
                }
            })



        },
        deletedata: (req, res) => {
            console.log("i am in delete block")

            event.deleteOne({ _id: req.body.id }, (err, data) => {

                if (err) {
                    res.status('400').send(err);
                }
                else {

                    res.send("successfully deleted " + JSON.stringify(data));
                }
            })



        },

        Adddata: (req, res) => {
            console.log(" i am in add block");

            let newuser=new event({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                address:req.body.address,
                email:req.body.email,
                contact:req.body.contact
                        })

            newuser.save((err, data) => {

                if (err) {
                    res.status('400').send(err);
                }
                else {

                    res.send("successfully addded data " + JSON.stringify(data));
                }
            })



        }




    }



}
