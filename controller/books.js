const dbBook = require("../models/googlebooks")
const ObjectId = require('mongodb').ObjectID;



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

function deleteBook (req,res){
    console.log(req.params.id)

    dbBook.deleteOne({_id : ObjectId(req.params.id)}, function (err) {
        if (err) return (err);
        console.log("sending result.")
        res.sendStatus(200);
    })
}







module.exports = {
    saveBook,
    deleteBook,
    getBooks

}