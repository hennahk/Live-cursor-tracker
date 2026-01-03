const socket = io();
const cursors = {};

let lastsend = 0;
const throttle = 50;

document.addEventListener("mousemove", (e) => {
	const now = Date.now();

	if(now - lastsent < throttle) return;
	lastsent = now;

	socket.emit("cursor-move",{
		x: e.clientX,
		y: e.clientY
	});
});

socket.on("cursor-update", ({ id, x, y }) => {
	let cursor = cursors[id];
	if(!cursor) {
		cursor = document.createElement("div");
		cursor.className = "cursor";
		document.body.appendChild(cursor);
		cursors[id] = cursor;
	}
	
	const currx = cursor.offsetLeft || x;
	const curry = cursor.offsetTop || y;

	const smoothx = currx + (x - currx) * 0.3;
	const smoothy = curry + (y - curry) * 0.3;

	cursor.style.left = smoothx + "px";
	cursor.style.top = smoothy + "px";
});

socket.on("user-disconnected", (id) => {
	if(cursors[id]) {
		cursors[id].remove();
		delete cursors[id];
	}
});
