const dbBook = require("../models/googlebooks")



function saveBook (req,res) {
    console.log ( "savebook", req.body)
    let book = new dbBook( req.body )
    // console.log(book)
    


    book.save(err => {
        if(err){
            console.log("Save failed" + err)
        }
    }) 
    res.sendStatus(200);
}



function getBooks (req,res){
    dbBook.find({}, (err, results) => {
        if (results) {
            res.json(results)
        } else {
            res.sendStatus(500);
        }
    } )
}










module.exports = {
    saveBook,
    // deleteBook,
    getBooks

}