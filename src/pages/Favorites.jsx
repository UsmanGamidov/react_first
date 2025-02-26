import Banner from "../components/Favorites/Banner.jsx"
import FavoritesList from "../components/Favorites/FavoritesList.jsx"
import Filter from "../components/Filter/Filter.jsx"
import MoviesList from "../components/Movies/MoviesList.jsx"
import MoviesScroll from "../components/Movies/MoviesScroll.jsx"

function Favorites() {
    return (
        <>
            <Banner />
            <div className="container">
                <Filter />
                <div className="favorites_movies">
                    <FavoritesList />
                    <MoviesList />
                </div>
                <MoviesScroll />
            </div>
        </>
    )
}

export default Favorites