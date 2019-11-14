var express =  require('express')
var mongoose =  require('mongoose')
var bodyparser =  require('body-parser')
var cors =  require('cors')
var path =  require('path')

var app = express();

port= 3000

url = 'http://localhost:'+port

app.get('/', (req, res)=>{
    res.send('Welcome to MEAN Stack!');
})

app.listen(port, ()=>{
    console.log("Server started at:" +url)
})