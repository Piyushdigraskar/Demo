const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req,res)=>{
    
    const url =req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('message.txt', (err,data) =>{
            if(err){
                return err;
            }
            else{
                res.write('<html>')
                res.write('<head><title>MY Title</title><head>')
                res.write(`<body><h3>${data}</h3></body>`)
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>')
                res.write('</html>')
                return res.end();  
            }
            
        });
        
    }
    if(url=== '/message' && method === 'POST'){

        const body = [];

        req.on('data' ,(chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', ()=>{
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message ,err =>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                res.end(); 
            });
  
        })
       
    } 
    
})

server.listen(3000)