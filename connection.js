const mysql = require('mysql2');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "mydb4"
})

con.connect((err) => {
    if(err){
        console.log("Error in Connection" + JSON.stringify(err,undefined,2))

    }
    else{
        console.log("Connected Successfully")

    };

     
    // DataBase Creation in MYSQL workbench
    // con.query("CREATE DATABASE mydb4", function (err, result) {
    //     if(err) {
    //         console.log(err)
    //     }else{
    //         console.log("DATABASE Created");
    //     }
    // })


    // Create Table in DATABASE
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function(err, result) {
    //     if(err) {
    //         console.log(err)
    //     }else{
    //         console.log("DATABASE Created");
    //     }
    // })

 

});


module.exports = con;