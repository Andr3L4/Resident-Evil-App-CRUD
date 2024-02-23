
import './App.css'
import {Routes, Route } from 'react-router-dom'
import ShowData from './Pages/ShowData'
/* import Navbar from './components/Navbar' */
import About from './Pages/About'
import CreateData from './Pages/CreateData'
import UpdateData from './Pages/UpdateData'
import MyReasons from './Pages/MyReasons'



function App()
{

  return (
    <>   
   
     
        <Routes>
          <Route  path='/' element={<ShowData />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/createData' element={<CreateData />} />
          <Route  path='/updateData/:id' element={<UpdateData/>} />
          <Route  path='/JohnCena' element={<MyReasons/>} />
        </Routes>
      {/* <CreateProduct /> */}
      {/* <ShowProduct /> */}
    </>
  )
}

export default App