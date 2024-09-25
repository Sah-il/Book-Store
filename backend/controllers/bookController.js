import { addBookModel } from "../models/bookModel.js";

export const addBooks = async (req,res) => {
  const {title,author,publishYear} = req.body;
  
  if(!title || !author || !publishYear){
    return res.status(400).send({message:"Send all required fields: title, author, publishYear"});
  }else{
    const book = new addBookModel({title,author,publishYear});
    await book.save();
    return res.status(201).send({message:"Book is register successfully"});
  }
};

export const getBook = async (req,res) => {
  try {
    const {_id} = req.params;
    const bookData = await addBookModel.findOne({_id});
    if(bookData){
      return res.status(201).send({
        count: bookData.length,
        books:bookData
      });
    }else{
      return res.status(400).send({error:"book did not exist"});
    }
  } catch (error) {
    return error;
  }
};

export const getAllBooks = async (req,res) => {
  try {
    const bookData = await addBookModel.find();
    
    if(bookData){
      return res.status(201).send(bookData);
    }else{
      return res.status(400).send({error:"books did not exist"});
    }
  } catch (error) {
    return error;
  }
};


export const updateBook = async (req,res) => {
  try {
    const {title,author,publishYear} = req.body;
    if(!title || !author || !publishYear){
      return res.status(400).send({
        message:"send all the required fields: title , author ,publishYear"
      })
    }
    const {_id} = req.params;
    const result = await addBookModel.findByIdAndUpdate(_id, req.body);
    if(!result){
      return res.status(404).send({message:"Book not found"})
    }
    return res.status(200).send({message:"Book updated Successfully"})
  } catch (error) {
    console.log(error);
    
  }
}

export const deleteBook = async (req,res) => {
  try {
   const {_id} = req.params;
   const result = await addBookModel.findByIdAndDelete(_id);
   if(result){
    return res.status(200).json({message:"Book deleted successfully!!"})
   }else{
    return res.status(400).json({message:"Book not found"})
   }
  } catch (error) {
    return error;
  }
}