var https = require('https');

// Problem: Simply look at User's badge and Javascript Points.
// Solution: Use node.js to connect to Treehouse's API to get profile info to print out

//Print out message
function printMessage(userName, badgeCount, points) {
  var message = userName + ' has ' + badgeCount + ' total badge(s) and ' +  points + ' points in javascript.';
  console.log(message);
}

//Print out error messages
function printError(error) {
  console.error(error.message);
}

function get(userName) {
  // Connect to the API url (httpss://teamtreehouse.com/fredrickbarfield.json)
  var request = https.get('https://teamtreehouse.com/' + userName + '.json', function (res) {
    var body = '';
    //Read the data
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function () {
      if (res.statusCode === 200) {
        try {
        //Parse the data
        var profile = JSON.parse(body);
        //Print the data
        printMessage(userName, profile.badges.length, profile.points.JavaScript);
      } catch(error) {
        //parse error
        printError(error);
      }
    } else {
      // status code error
      printError({message: 'There was an error getting the profile for ' + userName + '. (' + https.STATUS_CODES[res.statusCode] + ')'});
    }
  });
});
}

module.exports.get = get;
