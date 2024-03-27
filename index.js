const con = require('./connection');
const express = require('express');
const app = express();
const p = require('body-parser');

app.use(p.json());


// Insert  data in the Database
// app.post("/post" , (req,res) => {
//     const emp = req.body;
//     const empData = [emp.name, emp.address];
//     con.query('INSERT INTO customers(name, address) VALUES (?)', [empData] , (err, rows) => {
//         if(err) {
//             console.log(err)
//         }else {
//             res.send(rows);
//         }
//     })
//     })
    

// Page up in the browser
// app.get("/", (req,res) => {
//     res.send("Hello World")
// })


 
// Delete data in the DataBase
// app.get("/get/:n" , (req,res) => {
//     con.query("DELETE FROM customers WHERE name =(?)", [req.params.n] , (err, rows) => {
//         if(err) {
//             console.log(err)
//         }

//         else{
//             res.send(rows)
//         };
//     });      
// });


// Update data in the Database
app.get("/get/:n", (req,res) => {
    con.query("UPDATE customers Set name = 'Abhi' WHERE address =(?)", [req.params.n] , (err, rows) => {
        if(err) {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})



app.listen(3001, () => {
    console.log("Server is running on Port 3001");
})