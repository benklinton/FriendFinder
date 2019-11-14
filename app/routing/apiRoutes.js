require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        
    })
    app.post("/api/friends", function(req, res) {
        var userData = req.body
        console.log(userData)
        res.json(userData);
//create new object to hold difference of values
// loop though the friends array
// loop though scores 
// math.abs current user - current friend score
//store total difference in first loop
// 


    })
}