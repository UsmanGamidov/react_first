import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Banner from './components/Home/Banner'
import Filter from './components/Home/Filter'
import MoviesList from './components/Movies/MoviesList'
<<<<<<< HEAD
import Home from './pages/Home'
=======
>>>>>>> 0ee14841fae84ff62868b1f07f67d89e31107187


function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />
        <div className="movies__scroll">
            <button><i className="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
