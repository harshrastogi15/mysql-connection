const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
let port = process.env.port || 4000;
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "harsh",
  database: "studentdb",
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  con.query("SELECT * FROM student ", function (err, result, fields) {
    if (err) throw err;
    res.render("index.ejs", { result });
  });
});

app.get("/add", (req, res) => {
  res.render("Add");
});

app.post("/add", (req, res) => {
  con.query(
    `INSERT INTO student VALUES 
          ('${req.body.rollno}','${req.body.name}',${req.body.semester},'${req.body.branch}','${req.body.gender}','${req.body.dob}','${req.body.email}')`,
    function (err, result, fields) {
      if (err) throw err;
    }
  );
  res.redirect("/");
});

app.post("/delete",(req, res) => {
  con.query(
    `DELETE FROM student WHERE rollno='${req.body.rollno}'`,
    function (err, result, fields) {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.post('/update',(req,res)=>{
  con.query(`UPDATE student SET name='${req.body.name}',semester=${req.body.semester},branch='${req.body.branch}',gender='${req.body.gender}',dob='${req.body.dob}',email ='${req.body.email}' WHERE rollno=${req.body.rollno}`, function (err, result, fields) {
    if (err) throw err;
  });
  res.redirect('/');
})

app.listen(port, (req, res) => {
  console.log("SERVER IS AT : " + port);
});
