
import React from 'react';
import SongItem from './SongItem.js';


function ListSongs(props) {
    const listitems = props.songs.map(item => {
        return (
            <SongItem key={item.id} song={item} removeSong={props.removeSong} />
        )
    });

    return (
        <ul>
            {listitems}
        </ul>
    )
}

export default ListSongs;