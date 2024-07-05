var express = require("express")
var app = express()
app.get('/rubi',function(req,res){
    res.send("this is getting")
})

app.post('/sadaaf', function(req,res){
     res.send('this is posting')
})

app.listen(6000);