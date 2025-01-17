import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";


function ShowBook() {
  const [book,setbook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  
  

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://127.0.0.8:8000/book/find/${id}`)
    .then((res) => {
      setbook(res.data.books)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  },[])

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">ShowBook</h1>
      {loading ? (
        <Spinner/>
        ):(
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4"> 
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id:</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author:</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time:</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Last update time:</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
    </div>
  )
}

export default ShowBook