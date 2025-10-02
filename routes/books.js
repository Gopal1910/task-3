const express = require('express');
const router = express.Router();

let books = [];
let nextId = 1;

// GET /books - Retrieve all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books - Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - Update a book by id
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  book.title = title;
  book.author = author;
  res.json(book);
});

// DELETE /books/:id - Delete a book by id
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
