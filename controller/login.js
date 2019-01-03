var mongoose = require('mongoose');

var express = require('express');
var app = express();
var router = express.Router();
//app.use("/api",router);

//var jwt=require('jsonwebtoken');

var loginservice = require("../services/loginservice");

var eventservice = require("../services/eventservice")

module.exports = (app) => {
    app.post('/register', (req, res) => {
        //return res.send("hello get register method");
        loginservice().register(req, res);


    })
    app.get('/events', (req, res) => {
        console.log("loaded all data ")

        eventservice().LoadData(req, res);
    })

    app.post('/login', (req, res) => {
        console.log("again login " + JSON.stringify(req.body))

        loginservice().login(req, res);
    })
    app.post('/delete', (req, res) => {
        console.log("delete" + JSON.stringify(req.body))

        eventservice().deletedata(req, res);
    })

    app.post('/add', (req, res) => {
        console.log("adding data" + JSON.stringify(req.body))

        eventservice().Adddata(req, res);
    })
}





