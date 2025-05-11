import { useState } from "react";
import { useSong } from "../hooks/useSong";
import { isValidYouTubeUrl, isDuplicateUrl } from "../Validations/Validation";
import SongList from "./SongList"; 
import VideoModal from "./VideoModal";

const Song = () => {
  const { songs, addSong, removeSong, incrementPlayCount } = useSong();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [selectedSong, setSelectedSong] = useState(null); 
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDuplicateUrl(url, songs)) {
    alert("This song has already been added.");
    return;
    }

    if (!isValidYouTubeUrl(url)) {
    alert("The URL entered is invalid. It must be a YouTube link.");
    return;
    }

    if (!name || !url) {
      alert("Please fill in all fields.");
      return;
    }
    addSong(name, url);
    setName("");
    setUrl("");
  };
  
  const handlePlay = (song) => {
  setSelectedSong(song);  // ✅ Guarda la canción seleccionada
  setModalOpen(true);  // ✅ Abre el modal
  };  



  return (
    <div>
      {!modalOpen && (
        <form onSubmit={handleSubmit}>
          <input placeholder="Song name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type="submit">Add Song</button>
        </form>
      )}

       {!modalOpen && (
        <SongList songs={songs} incrementPlayCount={incrementPlayCount} removeSong={removeSong} />
       )}
        <VideoModal song={setSelectedSong} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Song;
