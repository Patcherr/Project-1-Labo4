import React from "react";
import { useSong } from "../../hooks/useSong";
import "./SongList.css";

const SongList = ({ songs, removeSong, handlePlay }) => {
    return (
        <ul className="songlist-container">
        {songs.map((song, i) => (
            <li className="songlist-item" key={i}>
                <div className="songlist-info">
                    <strong className="song-name">{song.name}</strong>: {song.url}
                </div>
                <div className="songlist-buttons">
                    <button className="play-button" onClick={() => handlePlay(song.url)}>▶️ Play ({song.plays})</button>
                    <button className="remove-button" onClick={() => removeSong(song.url)}>❌</button>
                </div>
            </li>
        ))}
        </ul>
    );
};

export default SongList;