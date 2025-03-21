import { Link } from "react-router-dom"
import star from "../../assets/icons/star.png"
import img_film from "../../assets/ImageFilm.jpg"

function MoviesCard(props) {
    return (
        <Link className="movies__card" to="/movie">
            <p>{props.name}</p>
            <div className="movies__card-rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <img src={props.imageUrl} alt="" />
        </Link>
    )
}

export default MoviesCard