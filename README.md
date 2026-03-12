# 🔐 Authentication API

A backend authentication system built with Node.js and Express.js.

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing
- **cookie-parser** - Cookie handling

## 📁 Project Structure

AUTH/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   └── utils/
│       └── generateToken.js
├── app.js
├── server.js
├── .env
├── .gitignore
└── package.json


## ⚙️ Setup & Installation

1. Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

2. Install dependencies
npm install



## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|------------|---------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login a user |
| GET | /api/auth/profile | Logout a user |


## 👨‍💻 Author
Rahul Yadav
