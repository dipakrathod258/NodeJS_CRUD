var express =  require('express')
var mongoose =  require('mongoose')
var bodyparser =  require('body-parser')
var cors =  require('cors')
var path =  require('path')
var route =  require('./routes/route')


var app = express();


mongoose.connect('mongodb://localhost:27017/Contactlist');

mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongodb @ 27017')
})

mongoose.connection.on('error', (err)=>{
    
    if(err) {
        console.log('Error in the database connection:'+err)        
    }
})


port= 3000;

app.use('/api', route);

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

url = 'http://localhost:'+port;

app.get('/', (req, res)=>{
    res.send('Welcome to MEAN Stack1!');
})

app.listen(port, ()=>{
    console.log("Server started at:" +url)
})