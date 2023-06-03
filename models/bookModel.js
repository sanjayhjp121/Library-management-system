const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  
  img: {
    type: String,
  },
subject: String,
  
  publishDate: {
    type: Date,
    
  },
});

module.exports = mongoose.model("Book", booksSchema);
