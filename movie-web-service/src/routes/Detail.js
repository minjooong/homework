import { useState, useEffect } from "react";

function Detail() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=52776");
                if (!response.ok) {
                    console.log(`An error occurred: ${response.status}`);
                    return;
                }
                const json = await response.json();
                setMovieData(json.data.movie);
            } catch (error) {
                console.log(`An error occurred while fetching the data: ${error}`);
            }
        };
        getMovie();
    }, []);

    if (!movieData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{movieData.title}</h1>
            <p>Year: {movieData.year}</p>
            <p>Rating: {movieData.rating}</p>
            <p>Runtime: {movieData.runtime} minutes</p>
            <p>Genres: {movieData.genres.join(", ")}</p>
            <img src={movieData.medium_cover_image} alt={movieData.title} />
        </div>
    );
}

export default Detail;
