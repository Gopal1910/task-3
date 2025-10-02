📚 Books REST API

A simple and lightweight RESTful API for managing a collection of books, built using Node.js and Express.js.
This project demonstrates core CRUD (Create, Read, Update, Delete) operations and provides a clean structure for building scalable backend APIs.

🚀 Features

📖 Get All Books – Retrieve the complete list of books

➕ Add a New Book – Create and store a new book record

✏️ Update Book Details – Modify an existing book by its ID

🗑️ Delete a Book – Remove a book from the collection

🏠 Welcome Endpoint – Basic root route to verify API status

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/books-api.git


Navigate to the project directory:

cd books-api


Install dependencies:

npm install


Start the server:

node index.js


The server will run at:

http://localhost:3000

📡 API Endpoints
1. GET /books

Retrieve all books from the collection.

Response:

[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name"
  }
]

2. POST /books

Add a new book to the collection.

Request Body:

{
  "title": "Book Title",
  "author": "Author Name"
}


Response:

{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name"
}

3. PUT /books/:id

Update a specific book by its id.

Request Body:

{
  "title": "Updated Title",
  "author": "Updated Author"
}


Response:

{
  "id": 1,
  "title": "Updated Title",
  "author": "Updated Author"
}

4. DELETE /books/:id

Delete a specific book by its id.

Response:

{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name"
}

5. GET /

Root endpoint to verify API status.

Response:

{
  "message": "Books API is running. Use /books endpoints for CRUD operations."
}

📁 Project Structure
📂 books-api/
│
├── 📄 index.js         # Main server file and entry point
├── 📄 routes/books.js  # Routes for handling book-related requests
├── 📄 package.json     # Project metadata and dependencies
└── 📄 README.md        # Documentation

🧰 Technologies Used

Node.js – JavaScript runtime environment

Express.js – Fast, minimalist web framework for Node.js

📜 License

This project is open-source and available under the MIT License
.

💡 Future Improvements

🗃️ Connect to a database (e.g., MongoDB or PostgreSQL) for persistent storage

🔍 Add search and filter functionality for books

🧪 Integrate testing with tools like Jest or Mocha
