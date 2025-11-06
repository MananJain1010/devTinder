DevTinder

DevTinder is a MERN-based platform inspired by Tinder, built to help developers connect, chat, and grow their tech network by sending and managing connection requests.

Tech Stack

Backend  
● Node.js  
● Express.js  
● MongoDB (Mongoose)  
● JWT Authentication  
● Socket.io (Real-time Chat)

Frontend  
● React (Vite)  
● Redux Toolkit  
● Tailwind CSS  
● Socket.io Client

Folder Structure

devTinder  
● backend (REST API - Node.js)  
● frontend (UI - React + Vite)

Backend Setup

cd backend  
npm install  
npm start

Backend runs at: http://localhost:7777

Frontend Setup

cd frontend  
npm install  
npm run dev

Frontend runs at: http://localhost:5173

Environment Variables (Backend)

Create a file named .env inside /backend and add:

MONGO_URL=<your_mongo_connection_uri>  
JWT_SECRET=<your_jwt_secret>

Features

● User Sign-up / Login  
● JWT Authentication  
● Developer Feed  
● Send / Accept / Reject Connection Requests  
● Real-time Chat (Socket.io)  
● Edit Profile and Skills  
● View Connections

Main Dependencies

Backend  
● express  
● mongoose  
● jsonwebtoken  
● bcrypt  
● socket.io

Frontend  
● react  
● redux toolkit  
● socket.io-client  
● tailwindcss

Author

Manan Jain

