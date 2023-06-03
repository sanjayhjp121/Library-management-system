const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Book = require("./models/bookModel")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", async(req, res) => {
  // res.render("index", { name: "Ajay Sharma" });
  let dic= [
    {
      "title": "A Brief History of Time",
      "author": "Stephen Hawking",
      "subject": "Science",
      "publishDate": new Date("September 1, 1988"),
      "coverPicUrl": ""
    },
    {
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "subject": "History",
      "publishDate": new Date("February 10, 2011"),
      "coverPicUrl": ""
    },
    {
      "title": "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
      "author": "Simon Singh",
      "subject": "Math",
      "publishDate": new Date("September 29, 1999"),
      "coverPicUrl": ""
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "subject": "Fantasy",
      "publishDate": new Date("August 1, 1965"),
      "coverPicUrl": ""
    },
    {
      "title": "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
      "author": "Brian Greene",
      "subject": "Science",
      "publishDate": new Date("October 29, 1999"),
      "coverPicUrl": ""
    },
    {
      "title": "A People's History of the United States",
      "author": "Howard Zinn",
      "subject": "History",
      "publishDate": new Date("1980"),
      "coverPicUrl": ""
    },
    {
      "title": "The Joy of x: A Guided Tour of Math, from One to Infinity",
      "author": "Steven Strogatz",
      "subject": "Math",
      "publishDate": new Date("October 2, 2012"),
      "coverPicUrl": ""
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "subject": "Fantasy",
      "publishDate": new Date("June 26, 1997"),
      "coverPicUrl": ""
    },
    {
      "title": "The Immortal Life of Henrietta Lacks",
      "author": "Rebecca Skloot",
      "subject": "Science, History",
      "publishDate": new Date("February 2, 2010"),
      "coverPicUrl": ""
    },
    {
      "title": "1491: New Revelations of the Americas Before Columbus",
      "author": "Charles C. Mann",
      "subject": "History",
      "publishDate": new Date("August 9, 2005"),
      "coverPicUrl": ""
    },
    {
      "title": "The Man Who Knew Infinity: A Life of the Genius Ramanujan",
      "author": "Robert Kanigel",
      "subject": "Math",
      "publishDate": new Date("1991"),
      "coverPicUrl": ""
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "subject": "Fantasy",
      "publishDate": new Date("September 21, 1937"),
      "coverPicUrl": ""
    },
    {
      "title": "The Double Helix: A Personal Account of the Discovery of the Structure of DNA",
      "author": "James D. Watson",
      "subject": "Science, History",
      "publishDate": new Date("1968"),
      "coverPicUrl": ""
    },
    {
      "title": "The Mathematics of Love: Patterns, Proofs, and the Search for the Ultimate Equation",
      "author": "Hannah Fry",
      "subject": "Math",
      "publishDate": new Date("February 2, 2016"),
      "coverPicUrl": ""
    },
    {
      "title": "A Wizard of Earthsea",
      "author": "Ursula K. Le Guin",
      "subject": "Fantasy",
      "publishDate": new Date("1968"),
      "coverPicUrl": ""
    },
    {
      "title": "The Emperor of All Maladies: A Biography of Cancer",
      "author": "Siddhartha Mukherjee",
      "subject": "Science, History",
      "publishDate": new Date("November 16, 2010"),
      "coverPicUrl": ""
    },
    {
      "title": "A Short History of Nearly Everything",
      "author": "Bill Bryson",
      "subject": "Science",
      "publishDate": new Date("May 6, 2003"),
      "coverPicUrl": ""
    },
    {
      "title": "The Rise and Fall of the Third Reich",
      "author": "William L. Shirer",
      "subject": "History",
      "publishDate": new Date("1960"),
      "coverPicUrl": ""
    },
    {
      "title": "The Man Who Knew Too Much: Alan Turing and the Invention of the Computer",
      "author": "David Leavitt",
      "subject": "Science, History",
      "publishDate": new Date("2005"),
      "coverPicUrl": ""
    },
    {
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "subject": "Fantasy",
      "publishDate": new Date("March 27, 2007"),
      "coverPicUrl": ""
    },
    {
      "title": "The Fabric of the Cosmos: Space, Time, and the Texture of Reality",
      "author": "Brian Greene",
      "subject": "Science",
      "publishDate": new Date("February 8, 2005"),
      "coverPicUrl": ""
    }
  ]
  
  
  // let books = await Book.insertMany(dic)
  let page = Number(req.query.page) || 1;
  let limit = 10;
  let skip = (page - 1) * limit;
  delete req.query['page']
  let subject = req.query.subject || "Fantasy,History"
  let books= null
  if (req.query.subject){
    books = await Book.find({subject})
  }else{

    books = await Book.find().sort(req.query.sort  ).skip(skip).limit(limit);
  }
  
  console.log(books)
  // let books = await Book.find({}).limit(10)
  res.render('index', {books,page})

});

module.exports = app;
