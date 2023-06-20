import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <h1>{movie ? movie.data.movie.title : "Loading..."}</h1>
            <p>{movie ? `genres : ${movie.data.movie.genres}` : ""}</p>
            <p>{movie ? movie.data.movie.description_full : ""}</p>
        </>
    );
}

export default Detail;
