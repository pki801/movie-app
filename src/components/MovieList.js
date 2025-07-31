import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index)=> (
                <div key={movie.imdbID || index} className='image-container d-flex justify-content-start m-3'>
                    <div className='col'>
                        <img src={movie.Poster} alt='movie'></img>
                        <div 
                            onClick={()=> props.handleFavoritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content'
                        >
                            <FavoriteComponent />
                        </div>
                    </div>
                </div>
        ))}
        </>
    )
}

export default MovieList;