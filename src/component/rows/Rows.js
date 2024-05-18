import React from 'react';
import "./rows.css";
import Rowlist from '../rowlist/Rowlist';

function Rows() {
   


    return (
        <div>
        <Rowlist title="NetflixOriginals" type="fetchNetflixOriginals" />
       <Rowlist title="Trending" type="fetchTrending" />
       <Rowlist title="TopRatedMovies" type="fetchTopRatedMovies" />
       <Rowlist title="ActionMovies" type="fetchActionMovies" />
       <Rowlist title="HorrorMovies" type="fetchHorrorMovies" />
       <Rowlist title="ComedyMovies" type="fetchComedyMovies" />
       <Rowlist title="RomanceMovies" type="fetchRomanceMovies" />
       <Rowlist title="Documentaries" type="fetchDocumentaries" />
       <Rowlist title="TvShow" type="fetchTvShow" />
        </div>
    );
}

export default Rows;
