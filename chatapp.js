const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login form

app.get('/', (req,res)=>{
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            console.log(err)
            data ='nothing';
        }
        res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById(\'username\').value = localStorage.getItem(\'username\')"><input type="text" name="message" id="message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`);
        })
    })
    

app.post('/',(req,res)=>{
    fs.writeFile('chat.txt',`${req.body.username} : ${req.body.message}`, {flag :'a'},(err)=>
        err ? console.log(err) : res.redirect('/')
    )
})
app.get('/login', (req, res) => {
    res.send('<form onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name="username"><button type="submit">Send</button></input></form>')
  });
  

app.listen(3000)