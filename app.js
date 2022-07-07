const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("")
const jquery = require('jquery')(dom.window)
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.render("/index.html");
})

app.post("/", function(req, res){
    
    let fullName = req.body.fullname;
    function reverseString(str) {
        var name = "";
        for (var i = str.length - 1; i >= 0; i--) {
            name += str[i];
        }
        return name;
    }
//         res.send(reverseString(fullName));
     
})

app.listen(3000, function () {
    console.log("Test!");
})
