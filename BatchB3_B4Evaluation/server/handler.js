exports.onDefault=(req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}

exports.onGetUsers=function(req, res){
    let users = [
        {"UserID":101,"Title": "User1"},
        {"UserID":102,"Title": "User2"},
        {"UserID":103,"Title": "User3"}
     ];
    res.send(users);
}