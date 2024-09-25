import express from 'express';
import dotenv from 'dotenv';
import { databaseConnection } from './db/connection.js';
import {bookRouter} from './routes/bookRoute.js'
import cors from 'cors';
dotenv.config();
const app = express();

// //test api
// app.get('/',(req,res) => {
//   res.send("Hello from the server")
// });

//middleware
// app.use(cors({
//   origin:'http://localhost:5173',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:['Content-Type']
// }));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/book',bookRouter)

app.listen(process.env.PORT, process.env.hostname, () => {
  console.log(`Server is running at http://${process.env.hostname}:${process.env.PORT}`);
  databaseConnection();
});

