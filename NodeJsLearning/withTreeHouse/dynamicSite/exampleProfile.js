var Profile = require ('./profile');

var studentProfile = new Profile('fredrickbarfield');

studentProfile.on('end', console.dir);

studentProfile.on('error', console.error);
