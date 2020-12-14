const express = require('express'); //menajeador de http requests
const app = express(); //instacia de aplicacion
const path = require('path'); //manejador de working directory sin importar OS.

//settings
app.set('port',4000);
app.set('view engine','ejs'); //No se necesita instanciarlo, motor de plantillas EJS ya esta integrado en Express js.

//middlewares

//routes
app.get('/', (req,res) => {
    //res.send('Hello World'); //Direct/raw output
    res.sendFile(path.join(__dirname,'views/index.html')); //Html file output
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname,'views/index.html'));
});

//static files

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port ',app.get('port'));
});

//console.log('Server listening!');