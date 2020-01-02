let express = require('express');
let path = require('path');
const cors = require('cors');
let handler = require('./handler');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get("/", handler.onDefault);
app.get("/getUsers",handler.onGetUsers);

app.listen(5656, ()=>{
    console.log("Express server listening at: http://localhost:5656");
}); 