const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const { Console } = require('console');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'digichef'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
console.log("Connection:"+connection);
app.get("/",(req,res)=>{
  res.render('index');
  });
  app.get("/index.ejs",(req,res)=>{
    res.render('index');
    });
  app.get("/about.ejs",(req,res)=>{
          res.render('about');
          });
          app.get("/login.ejs",(req,res)=>{
            res.render('login');
            });
            app.get("/price.ejs",(req,res)=>{
                res.render('price');
                });
                app.get("/recipe.ejs",(req,res)=>{
                    res.render('recipe');
                    });
                    app.get("/butter.ejs",(req,res)=>{
                      res.render('butter');
                      });
                      app.get("/burrito.ejs",(req,res)=>{
                        res.render('burrito');
                        });
                        app.get("/omurice.ejs",(req,res)=>{
                          res.render('omurice');
                          });
                          app.get("/tacos.ejs",(req,res)=>{
                            res.render('tacos');
                            });
                            app.get("/burger.ejs",(req,res)=>{
                              res.render('burger');
                              });
                              app.get("/cookies.ejs",(req,res)=>{
                                res.render('cookies');
                                });
                                app.get("/pad thai.ejs",(req,res)=>{
                                  res.render('pad thai');
                                  });
                                  app.get("/pancakes.ejs",(req,res)=>{
                                    res.render('pancakes');
                                    });
                                    app.get("/spaghetti.ejs",(req,res)=>{
                                      res.render('spaghetti');
                                      });
                                      app.get("/pizza.ejs",(req,res)=>{
                                        res.render('pizza');
                                        });
  
app.post('/submit', (req, res) => {
  const uname = req.body['username'];
  const password = req.body['password'];
  const querry = 'SELECT password FROM credential WHERE username = ?';
  connection.query(querry, [uname],function (err, results) {

    if (results.length > 0) {
      results.forEach((row) => {
      const pass= (`${row.password}`);
    if (password === pass){
        res.redirect('index');
      }
    else{
      res.render('login');
    }
      });
    } 
});
});
app.listen(port, () => {
  console.log('Server running on port 3000');
});