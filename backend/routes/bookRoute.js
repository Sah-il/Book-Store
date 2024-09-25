import express from 'express'
import { addBooks ,deleteBook,getAllBooks,getBook, updateBook} from '../controllers/bookController.js';

export const bookRouter = express.Router()

bookRouter.post('/add',addBooks);

bookRouter.get('/getAllBooks',getAllBooks)

bookRouter.get('/find/:_id',getBook)

bookRouter.put('/edit/:_id',updateBook)

bookRouter.delete('/delete/:_id',deleteBook)

