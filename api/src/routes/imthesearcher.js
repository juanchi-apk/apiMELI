const server = require('express').Router();
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch')


//ACA ME HAGO EL FETCH DEL SEARCH, SACO LOS DATOS CRUDOS, DESPUES, VOY A PASAR POR QUERY EL SITE, 
//CUANDO COMPLETEMENTE O CUANDO TERMINE LO QUE TENGO QUE ENTREGAR, PORQUE ME MOVI POR MIS INTERESES, Y
//ESTABA CON GANAS DE ARMAR OTRA COSA, AUNQUE CREO QUE LO PUEDO COMBINAR AHORA.


server.get('/search', async (req, res) => {
    let query = req.query.q;
    let querysort;
    if (req.query.s) {
        query= `${query}&sort=${req.query.s}`
    }
    
   var products = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, {
    })
    await products.json()
        .then((response) => {
            return res.send(response)
        }).catch((error) => {
            res.send("error "+error+"no anda")
        })

})


module.exports = server;
