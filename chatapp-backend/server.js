// adding express
const express = require('express')
const app = express();
const cors = require('cors');
const rooms = ["general","tech","finance","crypto"]

// use for receive data from frontend 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// frontend and backened communication is allowed here
app.use(cors());
// Creating server
const server = require("http").createServer(app);
// port number
const port = 5001;
// connecting websocket using socket.io
// and allowing cors
const io = require("socket.io")(server,{
    cors:{
        origin:"http://localhost300",
        method : ['GET','POST']
    }
})
// listening a port
server.listen(port,()=>{
    console.log("listening to port",port);
})
// nodenom is use to start a server
// it means it refresh everthing and we don't have to restart a server