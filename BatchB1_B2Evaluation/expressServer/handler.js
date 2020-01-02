exports.onDefault=(req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}

exports.onGetBooks=function(req, res){
    let books = [
        {"BookID":101,"Title": "Book1","category": "Book category Here", "availalbe": true},
        {"BookID":102,"Title": "Book2","category": "Book category Here", "availalbe": false},
        {"BookID":103,"Title": "Book3","category": "Book category Here", "availalbe": true}
     ];
    res.send(books);
}