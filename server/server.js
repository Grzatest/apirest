require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extend: false }));

app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});
app.get('/usuario/:id/:nombre', (req, res) => {
    let id = req.params.id;
    let nombre = req.params.nombre;

    res.json({
        id,
        nombre
    });
});
app.post('/usuario', (req, res) => {
    let nombre = req.body.nombre;
    let edad = req.body.edad;

    if(nombre === undefined || edad === undefined){
        res.status(400).json({
            ok: 'false',
            err: 'Todos los campos son necesarios'
        });
    }else{
        res.json({
            nombre,
            edad
        });
    }
});
app.put('/usuario', (req, res) => {
    res.json('put usuario');
});
app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});
app.listen(process.env.PORT);