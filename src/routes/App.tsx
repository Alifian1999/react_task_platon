import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindDuplicate from '../FindDuplicate'
import CalculateTotalPrice from '../CalculateTotalPrice'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import '../assets/styling/app.css'

function App() {
  return (
    <div className="app h-full">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      {/* <FindDuplicate/> */}
      {/* <CalculateTotalPrice/> */}
    </div>
  )
}

export default App
