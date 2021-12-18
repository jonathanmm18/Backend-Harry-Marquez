import express from 'express';
import cors from 'cors';
import path from 'path';

import morgan from 'morgan';

const app = express();



//coneccion a DB mysql


// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// RUTAS


app.use('/ravn',require('./routes/challenge'));



// middlewares para Vue.js roouter modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')))

//  configuracion
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')} `)
})


