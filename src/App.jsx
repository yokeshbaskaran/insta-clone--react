import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-black">
          <Home />
        </div>
      </Router>
    </>
  )
}

export default App