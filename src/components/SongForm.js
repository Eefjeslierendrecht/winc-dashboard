import React from 'react';
import opties from '../opties.js';

function Form(props) {
    const genreOptions = opties.genres.map(genre => {
        return <option key={genre} value={genre}>{genre}</option>
    })
    const filterOptions = opties.ratings.map(rating => {
        return <option key={rating} value={rating}>{rating}</option>
    })

    return (
        <header>
            <h1> My playlist</h1>
            <form onSubmit={props.addSong} className="song-form">
                <input type="text" name="text-song" placeholder="Song" />
                <input type="text" name="text-artist" placeholder="Artist" />
                <select name="select-genre" id="select-genre">
                    {genreOptions}
                </select>
                <select name="select-rating" id="select-rating">
                    {filterOptions}
                </select>
                <button>add song</button>
            </form>
        </header>
    )
}

export default Form;