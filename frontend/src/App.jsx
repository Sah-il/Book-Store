import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import UpdateBook from './pages/Updatebook'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBook/>} />
        <Route path='/books/details/:id' element={<ShowBook/>} />
        <Route path='/books/update/:id' element={<UpdateBook/>} />
        <Route path='/books/delete/:id' element={<DeleteBook/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
