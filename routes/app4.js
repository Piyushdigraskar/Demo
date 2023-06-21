const http = require('http')
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));


app.use('/admin', adminRoutes);

app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1><b>Page not found</b></h1>')
});
app.listen(3000);

