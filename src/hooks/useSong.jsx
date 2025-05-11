import { useState, useEffect } from "react";
import { songService } from "../services/SongService";

export const useSong = () => {
  const [songs, setSongs] = useState(() => songService.getItems() || []);
  const [selectedSong, setSelectedSong] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const update = (items) => setSongs([...items]);
    songService.subscribe(update);
    return () => songService.unsubscribe(update);
  }, []);
  
  const handlePlay = (url) => {
    const updatedSong = songService.playSong(url);
    setSelectedSong(updatedSong);
    setModalOpen(true);
  }
  

  
  return {
    songs,
    addSong: songService.addSong.bind(songService),
    removeSong: songService.removeSong.bind(songService),
    handlePlay,
    selectedSong,
    modalOpen,
    closeModal: () => setModalOpen(false),
  };
};
