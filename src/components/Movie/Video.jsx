import video from "../../assets/videos/Титаник.mp4"

function Video() {
    return (
        <div className="video-wrapper">
            <video controls>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video