const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const googleController = require("./controller/books")
const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  });


app.use(cors({
  origin: ["http://localhost:3000"], // 3000 is the front end
  credentials: true
}));


// app.use(cors({
//     origin:["https://ourherku.herokuapp.com"],
// credentials:true
// }));

app.post("/api/books", (req, res) => {
  googleController.saveBook(req, res)
});



app.get("/api/books", (req, res) => {
  console.log("got to the get request")
    googleController.getBooks(req, res)
});


app.delete("/api/book/:id", (req,res) => {
  console.log("got to delete book!")
  googleController.deleteBook(req, res)
});



// PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});