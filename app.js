const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js')
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
const items=['Buy Food', 'Cook Food' , 'Eat Food'];
const listItems=[];

app.get("/", function(req, res){
  const day = date.getDate();
  res.render('index' , {dayOfWeek : day,newListItem: items})
});

app.post('/', function (req,res) {  
  input = req.body.input;
  
  if(req.body.list === 'Work List'){
    listItems.push(input)
    res.redirect('/work')
  }
  else{
    items.push(input);
    res.redirect('/')
  }
})

app.get('/work', function (req,res) {  
  res.render('index',{dayOfWeek: 'Work List', newListItem: listItems})
})


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});  
