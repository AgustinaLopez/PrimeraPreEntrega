const express = require('express');
const cartsRoutes = require('../src/routes/carts.routes');
const productsRoutes = require('../src/routes/products.routes');


const app = express();
const PORT = 8080; //No esta
//Configuracion del servidor para recibir JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Creamos los enrutadores
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);

app.get('*', function (req, res) {
    res.send({status: "error", description: `ruta ${req.url} no encontrada`})
});

app.listen(PORT, ()=>{
    console.log(`Funcionando en puerto ${PORT}`);
})