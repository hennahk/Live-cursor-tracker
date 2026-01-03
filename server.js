const express = require ("express");
const http = require ("http");
const app = express();

const server = http.createServer(app);
const { Server } = require("socket.io");
const io  = new Server(server);

app.use(express.static("public"));

io.on("connection",(socket) => {
	console.log("User connected:",socket.id);
	socket.on("cursor-move", (data) => {
		socket.broadcast.emit("cursor-update", {
			id: socket.id,
			x: data.x,
			y: data.y 
		});
	});
	socket.on("disconnect",()=>{
	console.log("User disconnected:",socket.id);
	io.emit("user-disconnected",socket.id);
	});
});

server.listen(3000, () =>{
	console.log("Server running at http://localhost:3000");
	});
