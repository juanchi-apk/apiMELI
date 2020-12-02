const server = require('express').Router();
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch')




server.get('/:regionid', async (req, res) =>{
    var regionid= req.params.regionid.toUpperCase();
    var regions = await fetch(`https://api.mercadolibre.com/sites/${regionid}/categories`,{
               
    })
    await regions.json()
        .then((response)=>{
            return res.send(response)
        }).catch((error)=>{
            res.send("no anda")
        })

     
});

server.get('/details/:catid', async (req, res) =>{
    var catId= req.params.catid;
    var catDetails = await fetch(`https://api.mercadolibre.com/categories/${catId}`,{
     })
     await catDetails.json()
     .then((response)=>{
         return res.send(response)
     }).catch((error)=>{
         res.send("no anda")
     })
 
 });



module.exports = server;