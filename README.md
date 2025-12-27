# 📚 Books REST API

A simple and lightweight RESTful API for managing a collection of books. This project demonstrates core CRUD (Create, Read, Update, Delete) operations and provides a clean foundation for building scalable backend APIs. Built using Node.js and Express.js.

---

## 🚀 Features
- 📖 Get All Books – Retrieve the complete list of books  
- ➕ Add a New Book – Create and store a new book record  
- ✏️ Update Book Details – Modify an existing book using its ID  
- 🗑️ Delete a Book – Remove a book from the collection  
- 🏠 Welcome Endpoint – Basic root route to verify API status  

---

## 📡 API Endpoints

### GET /books
Retrieve all books.
Response:
[
  { "id": 1, "title": "Book Title", "author": "Author Name" }
]

---

### POST /books
Add a new book.
Request Body:
{ "title": "Book Title", "author": "Author Name" }

Response:
{ "id": 1, "title": "Book Title", "author": "Author Name" }

---

### PUT /books/:id
Update a book by ID.
Request Body:
{ "title": "Updated Title", "author": "Updated Author" }

Response:
{ "id": 1, "title": "Updated Title", "author": "Updated Author" }

---

### DELETE /books/:id
Delete a book by ID.
Response:
{ "id": 1, "title": "Book Title", "author": "Author Name" }

---

### GET /
Root endpoint.
Response:
{ "message": "Books API is running. Use /books endpoints for CRUD operations." }

---

## 🧰 Technologies Used
- Node.js  
- Express.js  

---

## 📜 License
This project is open-source and available under the MIT License.

---

## 💡 Future Improvements
- Database integration for persistent storage  
- Search and filter functionality  
- Testing support with Jest or Mocha
