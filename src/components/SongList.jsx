import React from "react";
import { useSong } from "../hooks/useSong";

const SongList = ({ songs, removeSong }) => {
    const { incrementPlayCount } = useSong();
    return (
        <ul>
        {songs.map((song, i) => (
            <li key={i}>
            <strong>{song.name}</strong>: {song.url}
            <button onClick={() => incrementPlayCount(song.url)}>▶️ Play ({song.plays})</button>
            <button onClick={() => removeSong(song.url)}>❌</button>
            </li>
        ))}
        </ul>
    );
};

export default SongList;