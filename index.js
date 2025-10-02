const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

app.use(express.json());

// Use books router for /books endpoints
app.use('/books', booksRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Books API is running. Use /books endpoints for CRUD operations.' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
