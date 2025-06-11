# Chat_App

A full-stack chat application built with React (frontend) and Node.js/Express (backend), featuring user authentication and real-time messaging.

## Features

- User registration and login (JWT authentication)
- Real-time chat functionality
- Responsive UI with React and Tailwind CSS
- Secure password storage with bcryptjs
- PostgreSQL database integration

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/Chat_App.git
   ```

2. **Backend setup:**
   ```
   cd server
   npm install
   ```
   - Create a `.env` file with your database and JWT settings.

3. **Frontend setup:**
   ```
   cd ../Chat\ App
   npm install
   ```

4. **Start the backend:**
   ```
   cd server
   node index.js
   ```

5. **Start the frontend:**
   ```
   cd ../Chat\ App
   npm run dev
   ```

## Folder Structure

- `/server` - Node.js/Express backend
- `/Chat App` - React frontend

## License

MIT
