import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import axios from "../../utils/axios";
import requests from '../../utils/requests';
import "./rowlist.css";

function Rowlist(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const request = await axios.get(requests[props.type]);
                setMovies(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchMovies();
    }, [props.type, props.title]);

    async function handleClick(movie) {
        try {
          const movieTitle = movie?.name || movie?.original_name || movie?.title;
          const url = await movieTrailer(movieTitle);
          setTrailerUrl(url);
        } catch (error) {
          console.error("Error:", error);
        }
      }

    return (
        <div>
            <h1 className='hone'>{props.title}</h1> 
            <div className="flex-container">
                {movies.map((movie, index) => (
                    <div className="listofmovies" key={index}>
                        <div 
                            className="single-movie" 
                            style={{ backgroundImage: `url(${movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : ''})` }}
                            onClick={() => handleClick(movie)}
                        >
                        </div>
                    </div>
                ))}
            </div>
            {trailerUrl && 
                <div className="centered-video">
                    <ReactPlayer className="react-player" url={trailerUrl} playing={true} />
                </div>
            }
            
        </div>
    );
}

export default Rowlist;
