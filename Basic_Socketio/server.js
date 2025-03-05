import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {cors:{origin:"*"}});

io.on("connection",(socket)=>{
    console.log("New User Connected:", socket.id);

    socket.on("message", (msg)=>{
        console.log("Message received:", msg);
        io.emit("message", msg);
    })

    socket.on("disconnect", ()=> console.log("User disconnected:", socket.id));
});


server.listen(3000, ()=> console.log("Server running on http://localhost:3000"));