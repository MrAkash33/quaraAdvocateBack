import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser'
import routes from './router.js';

dotenv.config()

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.json())
app.use('/api/v1', routes)


let errorMiddle = (error, req, res, next) => {
  const statusCode = error.statusCode || 400   
  console.log("error in app",error)
  res.status(statusCode).json({status: 'fail', error: error.message})
 }
 
 app.use(errorMiddle)
 
app.listen(process.env.PORT, function() {
  console.log('Express server listening on port ' + process.env.PORT);
});