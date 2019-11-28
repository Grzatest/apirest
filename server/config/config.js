//PUERTO
process.env.PORT = process.env.PORT || 3000;
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//Conecciona  a la base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeteria';
} else {
    urlDB = 'mongodb+srv://root:xOMM1EIcaGrKRuxf@cluster0-y1g0q.mongodb.net/cafeteria'
}
process.env.URLDB = urlDB;

//FIRMA DE JWT
process.env.SEED = process.env.SEED || 'firma-super-secreta';

//EXPIRE TIME JWT
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';