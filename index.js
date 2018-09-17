'use strict'
var mongoose = require('mongoose');
var app  = require('./app');
var port = process.env.PORT || 3678;

app.listen(3678,function(){
            console.log(`api rest del anfitrion funcionando en http://localhost:${port}`);
        });
