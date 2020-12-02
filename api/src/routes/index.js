const { Router } = require('express');


const server = Router();
const routeinit = require('./routeinit');
const catroute = require('./catroute');
const searchrouter = require ('./imthesearcher');
//const details = require ('./details')


server.use("/region" , routeinit);
server.use("/categories" , catroute);
server.use ("/api", searchrouter);

//server.use("/details", details);

module.exports = server;
