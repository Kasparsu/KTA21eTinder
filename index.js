import express from 'express';
import { Homepage } from './views/Homepage.js';
import { MainLayout } from './views/MainLayout.js';
import { SignUp } from './views/SignUp.js';

var app = express();
app.use(express.urlencoded());


let currentUser = "Timo"

app.get('/', function(req, res){
    let page = MainLayout(Homepage(currentUser))
    res.send(page);
});

app.get('/add', function(req, res){
    let page = MainLayout("Lisamise leht<a href='/'>Tagasi</a>")
    res.send(page);
});

app.get('/register', function(req, res){
    let content = SignUp()
    let page = MainLayout(content, "Sign Up")
    res.send(page);
});

app.post('/register', function(req, res){
    //console.log("Body:", req.body)

    let content = `Tere ${req.body.name}! Sinu konto avamine õnnestus<br><a href='/'>Tagasi</a>`
    let page = MainLayout(content, "Sign Up")
    res.send(page);
});


app.listen(3000); //  http://localhost:3000/