const server = require('express').Router();
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch')


server.get('/', async (req, res) =>{
    var regions = await fetch('https://api.mercadolibre.com/sites',{
        method: "get",
        mode: 'cors',
        
    })
    await regions.json()
        .then((response)=>{
            return res.send(response)
        }).catch((error)=>{
            res.send("no anda")
        })
})

module.exports=server;
