import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Movie from './Pages/Movie'
import Error404 from './Pages/Eror404'
import { createContext, useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'

export const Films = createContext();


function App() {

  const [value, changeValue] = useState([]);

  useEffect(() => {
    async function FetcFilms() {
      await fetch("https://67dca2c2e00db03c40688a9e.mockapi.io/movies")
        .then(data => {
          return data.json()
        })
        .then(data => {
          console.log(data)
          changeValue(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    FetcFilms();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          </Provider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
