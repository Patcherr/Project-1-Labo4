import { useState } from "react";
import { useSong } from "../hooks/useSong";
import { isValidYouTubeUrl, isDuplicateUrl } from "../Validations/Validation";
import SongList from "./SongList"; 

const Song = () => {
  const { songs, addSong, removeSong, incrementPlayCount } = useSong();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDuplicateUrl(url, songs)) {
    alert("This song has already been added.");
    return;
    }

    if (!isValidYouTubeUrl(url)) {
    alert("La URL ingresada no es válida. Debe ser un enlace de YouTube.");
    return;
    }

    if (!name || !url) return;

    addSong(name, url);
    setName("");
    setUrl("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Song name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Add Song</button>
      </form>

       {/* 🔥 Mostramos la lista de canciones con el nuevo componente */}
      <SongList songs={songs} incrementPlayCount={incrementPlayCount} removeSong={removeSong} />
    </div>
  );
};

export default Song;
