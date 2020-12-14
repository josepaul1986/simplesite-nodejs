const express = require('express'); //menajeador de http requests
const app = express(); //instacia de aplicacion
const path = require('path'); //manejador de working directory sin importar OS.

//settings
app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
//app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs'); //No se necesita instanciarlo, motor de plantillas EJS ya esta integrado en Express js.

//middlewares

//routes
app.use(require('./routes/index'));
//static files


//listening the server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ',app.get('port'));
});