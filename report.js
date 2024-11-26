const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/17601442-11bc0551-f6aa-4439-b8ac-6226cfed13f6?access_key=${process.env.secretKey}`,
    reporters: "htmlextra",
    iterationCount:1,
    reporter:{
        htmlextra:{
            export: "./Reports/report.html"
        }
    }
},(err)=>{
    if(err){
        throw err;
    }
    console.log("collection run complete")
});
