
import React from 'react';

function SongItem(props) {
    return (
        <li className="list-item">
            <table style={{ width: "100%" }}>
                <tr>
                    <span>{props.song.song}</span>
                    <span>{props.song.artist}</span>
                    <span>{props.song.genre}</span>
                    <span>{props.song.rating}</span>
                    <button onClick={props.removeSong}>remove song</button>
                </tr>
                </table>
        </li>
    )
}

export default SongItem;
