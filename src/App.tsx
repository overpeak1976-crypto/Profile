import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@radix-ui/themes'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <Box>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </Box>
  )
}

export default App;
