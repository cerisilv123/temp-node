const os = require('os');

// info about current user
console.log(os.userInfo()); // Gives user details
console.log(os.version()); // Gives details about kernel
console.log(os.uptime());