# Task Management App

## 📌 Overview
The **Task Management App** is a full-stack application built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. It allows users to create, manage, update, and delete tasks efficiently. The frontend is styled with **Tailwind CSS** for a modern and responsive UI.

## 🚀 Features
- Add new tasks with a title and description
- Edit and update existing tasks
- Mark tasks as completed
- Delete tasks
- Responsive UI with **Tailwind CSS**
- User authentication (optional, if implemented later)

## 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- Axios (for API requests)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS (to handle cross-origin requests)

## ⚙️ Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (running locally or using MongoDB Atlas)

### Clone the Repository
```sh
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

## 🔗 API Endpoints
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | /api/tasks      | Fetch all tasks     |
| POST   | /api/tasks      | Create a new task   |
| PUT    | /api/tasks/:id  | Update a task       |
| DELETE | /api/tasks/:id  | Delete a task       |

## 🖥️ Usage
1. Open the frontend at: **http://localhost:5173**
2. Perform CRUD operations on tasks.

## 🤝 Contributing
Contributions are welcome! Feel free to **fork** this repository and submit a **pull request**.

## 📝 License
This project is licensed under the **MIT License**.

## 📬 Contact
For any queries, reach out to me at **teja.rks@gmail.com** or connect on **[LinkedIn]([https://www.linkedin.com/in/yourprofile](https://www.linkedin.com/in/rks-teja/))**.

---
### 🎯 Happy Coding! 🚀
