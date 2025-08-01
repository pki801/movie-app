import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddFavorites = () => {
    return(
        <>
            <span className='ms-5 me-2'>Add to Favorites</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1em" 
                height="1em" 
                fill="red" 
                class="bi bi-heart-fill" 
                viewBox="0 0 16 16"
            >
                <path 
                    fill-rule="evenodd" 
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
            </svg>

        </>
    );
};

export default AddFavorites;