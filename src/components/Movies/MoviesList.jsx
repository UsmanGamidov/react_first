import MoviesCard from "./MoviesCard"

function MoviesList() {
    let arrayFilms = ["kenguru", "dog", "joker", "betmen"];

    return (
        <div id="movies" className="movies anchor">
            {
                arrayFilms.map((value, index) => (
                    <MoviesCard key = {index} name = {value} />
                ))
            }
        </div>
    )
}

export default MoviesList