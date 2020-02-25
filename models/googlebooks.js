const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const googleBooksSchema = new Schema(
    {
        title: String,
        authors: [{type: String, required: true}],
        desc: String,
        img: String,
        link: String
        
    }
);


module.exports = mongoose.model("googlebooks", googleBooksSchema);