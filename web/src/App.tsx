import { Route, Routes } from 'react-router'
import ContactLandingPage from './landing/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactLandingPage />} />
    </Routes>
  )
}

export default App
