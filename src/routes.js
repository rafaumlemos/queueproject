const express = require ('express');
const endpoint = require('./endpoints');

const routes = express.Router();

routes.post("/createUser", (req,res) => {
    endpoint.createUser(req,res);
});

routes.post("/showLine", (req,res) => {
    endpoint.showLine(req,res);
});

routes.post("/addToLine", (req, res) => {
    endpoint.addToLine(req,res);
});

routes.post("/findPosition", (req, res) => {
    endpoint.findPosition(req,res);
});

routes.post("/filterLine", (req, res) => {
    endpoint.filterLine(req,res);
});

routes.post("/popLine", (req, res) => {
    endpoint.popLine(req,res);
});


module.exports = routes;