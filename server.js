const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const nameOfController = require('./controller'); 

app.use(bodyParser.urlencoded({extended: false})); 
app.use(methodOverride('_method')); 
// app.use('/', controller);

// FINISH SETTING UP CONNECTION TO SQL DB
app.get('/', function (req, res) {
   
    const sql = require("mssql");

    // config for your database
    const config = {
        user: 'sa',
        password: 'Kar75109',
        server: 'localhost', 
        database: 'abs' 
    };

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        const request = new sql.Request();
           
        request.query('SELECT * FROM Makes', function (err, recordset) {
            if (err) {
                console.log(err)
            } else {
            console.log('hit');
            }
        });

        // const tables = ['Makes', 'Models', 'Years'];

        // tables.forEach(function(table) {
        //     request.query(`select * from ${table}`, function (err, recordset) {
        //         if (err) {
        //             console.log(err);
        //         } else if (recordset) {
        //             console.log(recordset);
        //             console.log('hit')
        //         }        
        //     });
        // })
    });
});

app.get('/', function (req, res){
    
})



app.listen(3000, () => {
    console.log('listening on port 3000') 
});