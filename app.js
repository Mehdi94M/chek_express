var express = require('express');
var app = express(); 

const logger = (req,res,next) => {
    const date = new Date();
    if (
      date.getDay() === 0 ||
      date.getDay() === 6 ||
      date.getHours() < 9 ||
      date.getHours() > 17
    ) {
      res.sendFile(__dirname + "/public/closed.html");
    } else next();
  }
  app.use(logger);
app.use(express.static("public"));


app.get('/',logger, (req,res) => {
    res.sendFile(__dirname+'/public/Home.html')
    ;
})
app.get('/ContactUs',logger,(req,res) => {
    res.sendFile(__dirname+'/public/ContactUs.html')
    ;
})


app.get('/OurServices',logger,(req,res) => {
    res.sendFile(__dirname+'/public/OurServices.html')
    ;
})


app.get('/css/style.css',logger,(req,res) => {
    res.sendFile(__dirname+'/public/css/style.css')
    ;
})

const port = 5000 ;
app.listen(port,err => 
    err ? console.log(err) : console.log(`started on ${port}`));