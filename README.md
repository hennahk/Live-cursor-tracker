# Live Cursor Tracker

## Description
This project is a simple real-time web application that tracks and displays cursor movements between multiple users using **Socket.IO**. When one user moves their mouse, other connected users can see the cursor movement live.

---

## Features
- Real-time cursor tracking
- Multiple users supported
- Smooth cursor movement
- Draggable object on the screen
- Built using plain JavaScript

---

## Tech Stack
- Node.js
- Express
- Socket.IO
- HTML, CSS, JavaScript

---

## How It Works
- Express serves the frontend files
- Socket.IO establishes a real-time connection
- Clients send cursor positions to the server
- The server broadcasts cursor data to other clients
- Clients render the received cursor positions

---

## How to Run

1. Install dependencies:
```bash
npm install

    Start the server:

node server.js

    Open in browser:

http://localhost:3000

Open the app in two tabs or browsers to see live cursor tracking.
