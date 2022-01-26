(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1643136952691
//APP_KEY=KZZHVmhRiyxUpG-IWFfrUISDRADg8VvBMrzm-kLx64o7uzzad2nY3mQ-GWE6rs4PQji7M3hYUGzMcYOics9kQA