var data = require("../data.json");

exports.addFriend = function(req, res) { 
  // Your code goes here
  var name = req.query.name;
  var description = req.query.description;
  var jsonObj = {
  	"name":name,
  	"description": description,
  	"imageURL": "http://lorempixel.com/400/400/people"
  }
  data.friends.push(jsonObj);
  //console.log(jsonObj);


  res.render('index', {
  	"friends":data['friends']
  })

}