import { useState, useEffect } from "react";
import { songService } from "../services/SongService";

export const useSong = () => {
  const [songs, setSongs] = useState(songService.getItems());

  useEffect(() => {
    const update = (items) => setSongs([...items]);
    songService.subscribe(update);
    return () => songService.unsubscribe(update);
  }, []);

  const incrementPlayCount = (url) => {
    setSongs(songService.incrementPlays(url));
  };

  
  return {
    songs,
    incrementPlayCount,
    addSong: songService.addSong.bind(songService),
    removeSong: songService.removeSong.bind(songService),
  };
};
