var express = require('express');
var router = express.Router();
var friends = require('./../data/friends');




router.post('/friend', function(req, res) {
    var lowestDiff = null;
    var bestMatch = null;
    var newFriend = req.body;
    console.log(newFriend);
   friends.forEach (friend => {
       var totalDiff = 0;
     
       friend.scores.forEach((score, index )=> {
           var diff = score - newFriend['scores[]'][index];
            totalDiff += Math.abs(diff);
           //console.log(newFriend.scores[index]);
       });

       if( totalDiff < lowestDiff || lowestDiff === null) {
           lowestDiff = totalDiff;
           bestMatch = friend;
       }

   })


    res.send(bestMatch);
});



module.exports = router;