DevTinder

DevTinder is a MERN (MongoDB, Express, React, Node.js) based platform inspired by Tinder — built to help developers connect, chat, send connection requests, and grow their tech network.


Tech Stack ->

Backend 
● Node.js
● Express.js
● MongoDB (Mongoose)
● JWT Authentication
● Socket.io (Real-time Chat)

Frontend 
● React.js (Vite)
● Redux Toolkit
● Tailwind CSS
● Socket.io Client


Folder Structure->
devTinder
 ● backend # Node.js REST API
 ● frontend # React UI (Vite)



Backend Setup ->

```bash
cd backend
npm install
npm start


Backend runs on: http://localhost:7777

Frontend Setup ->
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

Environment Variables (Backend) ->

Create a .env file inside /backend containing:

MONGO_URL=<your_mongo_connection_uri>
JWT_SECRET=<your_jwt_secret>

Features ->
● User Sign-up / Login
● JWT Authentication
● Send/Accept/Reject Connection Requests
● Developer Feed
● Real-time Chat (Socket.io)
● Edit Profile & Skills
● View Connections

Main Dependencies ->
Backend

●express
●mongoose
●jsonwebtoken
●bcrypt
●socket.io

Frontend
●react
●redux toolkit
●socket.io-client
●tailwindcss

Author

Manan Jain
