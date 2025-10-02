📚 Books REST API (Node.js + Express)
📌 Project Overview

This project is a simple yet powerful RESTful API built using Node.js and Express.js to manage a collection of books.
It demonstrates how to build a backend API that supports CRUD operations (Create, Read, Update, Delete) — allowing users or client applications to interact with a list of books via HTTP requests.

The project is perfect for beginners learning backend development, REST principles, and Express.js basics.

🚀 Features Implemented
📘 CRUD Endpoints:

➕ Create a Book – Add a new book to the list.

📖 Read Books – Get all books or a single book by ID.

✏️ Update a Book – Edit details of an existing book.

🗑️ Delete a Book – Remove a book from the list.

🛠️ Additional Features:

✅ RESTful API structure – Follows proper HTTP methods and status codes.

🗂️ JSON data format – Easy integration with front-end apps or other APIs.

🔄 Express Router – Clean and scalable route management.

🧪 Testable with tools – Works with Postman, Thunder Client, or any REST client.

🛠️ Technologies Used

Node.js – JavaScript runtime environment for backend development

Express.js – Lightweight and fast Node.js framework for building APIs

Nodemon (optional) – For automatic server restart during development

📂 Project Structure
📁 books-api/
│
├── 📄 index.js         # Main entry point for the server
├── 📄 routes/books.js  # Route definitions for books API
├── 📄 package.json     # Project metadata and dependencies
└── 📄 README.md        # Project documentation (this file)

📡 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get a single book by ID
POST	/api/books	Add a new book
PUT	/api/books/:id	Update an existing book
DELETE	/api/books/:id	Delete a book by ID

📦 Example Book JSON Object:

{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018
}

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/books-api.git
cd books-api


Install dependencies:

npm install


Run the server:

node index.js


or with nodemon:

npm run dev


Access the API:
Server runs by default on: http://localhost:3000

📬 Example Requests (Using cURL)

✅ Get all books:

curl http://localhost:3000/api/books


➕ Add a new book:

curl -X POST http://localhost:3000/api/books -H \"Content-Type: application/json\" -d '{\"title\": \"The Alchemist\", \"author\": \"Paulo Coelho\", \"year\": 1988}'


✏️ Update a book:

curl -X PUT http://localhost:3000/api/books/1 -H \"Content-Type: application/json\" -d '{\"title\": \"Updated Title\"}'


🗑️ Delete a book:

curl -X DELETE http://localhost:3000/api/books/1

📚 What We Did

Built a RESTful API backend from scratch using Node.js and Express.

Implemented CRUD operations for managing a list of books.

Structured the project cleanly using routers and modular code.

Used JSON as the standard format for API communication.

Made the API ready for testing with tools like Postman or integration into a frontend project.

🌟 Future Improvements (Optional)

💾 Connect the API to a database (e.g., MongoDB or PostgreSQL).

🔐 Add input validation and error handling with libraries like Joi or express-validator.

🔑 Implement authentication & authorization (e.g., JWT).

📊 Add pagination, search, and filtering.
