const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'snapdragon123',
    database: 'TesteDb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err)
    console.log('Db connection is sucess');
    else
    console.log('Db connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port on : 3000'));

//Get all employees
app.get('/employees', (req, res)=>{
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

//Get an employees
app.get('/employees/:id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM employee WHERE EmpID = ?',[req.params.id], (err, rows, fields) => {
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

//Delete an employees
app.delete('/employees/:id', (req, res)=>{
    mysqlConnection.query('DELETE employee FROM employee WHERE EmpID = ?',[req.params.id], (err, rows, fields) => {
        if(!err)
        res.send('Deleted successfully');
        else
        console.log(err);
    })
});


//Insert an employees
app.post('/employees', (req, res)=>{
    let emp = req.body;
    var sql = 'SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID, @Name, @EmpCode, @Salary);'
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});