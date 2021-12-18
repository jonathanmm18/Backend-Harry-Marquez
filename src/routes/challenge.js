import express from 'express';
import { route } from 'express/lib/application';
const router = express.Router();
import mysql from 'mysql';

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db_ravn'
  });

router.get('/top/:count', (req, res) => {
    let _count = req.params.count;
    _count === '0' || _count === null ? _count = '10' : _count = _count;
    let authors = [];
    try {
       
        connection.query("select * from authors order by date_of_birth  asc limit "+ _count, function (error, results, fields) {
            if (error) throw error;
            authors = results;      
            
            return res.status(200).json(authors);      
          });
        
      
    }catch (err) {
      return res.status(500).json({
            message: 'Ocurrio un error',
            ok: false,
            err
        });
    }

});
module.exports = router;    