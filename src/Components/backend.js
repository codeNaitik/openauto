

// ===our express===
const express = require("express");
const app = express();

const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:3003",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  

var bodyParser = require("body-parser");
const port = 3000;
var mongoose = require("mongoose");
const User = require("./model/User");

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors(corsOptions))

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

// ===mongodb connection===
var db = mongoose.connection;


// =====confirmation of connection===
db.on('error', ()=>console.log("error bro"))
db.once('open', ()=>console.log("connected to db"))


app.post("/signup",async (req, res) => {
    try {
        const  name = req.body.Name;
  const  email = req.body.Email;

  let user = await User.create({
    name,email
  });

  res.json(user)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })

        
    }
  
});


app.listen(port, () => console.log(` app listening on port ${port}!`))






