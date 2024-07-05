var express = require("express")
var app = express()
app.get('/ch', function (req,res){
    res.send("hello this is sadaaf")

})
app.listen(6000);