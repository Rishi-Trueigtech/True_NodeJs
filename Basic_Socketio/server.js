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

    socket.on("joinRoom", (room)=>{
        // console.log("Message received:", msg);
        // io.emit("message", msg);
        socket.join(room);
        console.log(`User ${socket.id} joined room: ${room}`);
        socket.to(room).emit("message",`User${socket.id} joined the chat.`);
    });

    socket.on("roomMessage",({room, message})=>{
        io.to(room).emit("message", message);
    });

    socket.on("disconnect", ()=> console.log("User disconnected:", socket.id));
});


server.listen(3000, ()=> console.log("Server running on http://"));