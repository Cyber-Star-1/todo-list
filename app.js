const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
let items=['Buy Food'];
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  
  let today = new Date();
  let options = {
    weekday: 'long', day: '2-digit' , month: 'long' , year:'numeric'
  }
  let day =today.toLocaleDateString('en-US', options)

  res.render('index' , {dayOfWeek : day,newListItem: items})
});

app.post('/', function (req,res) {  
  input = req.body.input;
  items.push(input);
  res.redirect('/')
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
