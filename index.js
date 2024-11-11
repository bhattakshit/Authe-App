import dotenv from "dotenv"
import app from './app.js'
import connectDb from "./db/index.js";
import express from 'express';
dotenv.config({
  path:'./.env'
})


connectDb().then(
  ()=>{
  app.on("error",()=>{
    console.log("ERR",error);
    throw error;
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is runnnig at port: ${process.env.PORT}`);
  })
  
}).catch((error)=>{
  console.log("Mongo db connection failed");
}); 



// BEGIN
//   // Step 1: Load environment variables
//   LOAD environment variables using dotenv
  
//   // Step 2: Attempt to connect to the database
//   CALL connectDb()
  
//   ON successful database connection:
//     // Step 3: Set up error handling
//     SET app to listen for "error" events
//     IF error occurs
//       PRINT "Error" and the error details
//       THROW the error
    
//     // Step 4: Start the server
//     SET port to environment PORT or 8000 as fallback
//     START listening on port
//     PRINT "Server is running on port <port>"
    
//   ON database connection failure:
//     PRINT "MongoDB connection failed"

// END
