
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './routes/Login'
import {Register} from './routes/Register'
import {User} from './routes/User'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
