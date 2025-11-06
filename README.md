**DEVTINDER**
=============

DevTinder is a MERN-based platform inspired by Tinder, built to help developers connect, chat, and grow their tech network by sending and managing connection requests.

**TECH STACK**
==============

**BACKEND**
-----------

● Node.js  
● Express.js  
● MongoDB (Mongoose)  
● JWT Authentication  
● Socket.io (Real-time Chat)

**FRONTEND**
------------

● React (Vite)  
● Redux Toolkit  
● Tailwind CSS  
● Socket.io Client

**FOLDER STRUCTURE**
====================

devTinder  
● backend (REST API - Node.js)  
● frontend (UI - React + Vite)

**BACKEND SETUP**
=================

```bash
cd backend
npm install
npm start
Backend runs at: http://localhost:7777

FRONTEND SETUP
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

ENVIRONMENT VARIABLES (BACKEND)
Create a file named .env inside /backend and add:

MONGO_URL=<your_mongo_connection_uri>
JWT_SECRET=<your_jwt_secret>

FEATURES
● User Sign-up / Login
● JWT Authentication
● Developer Feed
● Send / Accept / Reject Connection Requests
● Real-time Chat (Socket.io)
● Edit Profile and Skills
● View Connections

MAIN DEPENDENCIES
BACKEND
● express
● mongoose
● jsonwebtoken
● bcrypt
● socket.io

FRONTEND
● react
● redux toolkit
● socket.io-client
● tailwindcss

AUTHOR
Manan Jain

