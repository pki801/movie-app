import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> (
                <div key={movie.imdbID || index} className='d-flex justify-content-start m-3'>
                    <div className='col'>
                        <img src={movie.Poster} alt='movie'></img>
                    </div>
                </div>
        ))}
        </>
    )
}

export default MovieList;