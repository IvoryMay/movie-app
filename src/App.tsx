import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MovieDetailPage from './Pages/MovieDetailPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </>
  )
}

export default App
