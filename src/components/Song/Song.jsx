import { useState, useEffect } from "react";
import { useSong } from "../../hooks/useSong";
import { isValidYouTubeUrl, isDuplicateUrl } from "../../Validations/Validation";
import SongList from "../SongList/SongList"; 
import VideoModal from "../Modal/VideoModal";
import "./Song.css";

const Song = () => {
  const { songs, addSong, removeSong, handlePlay, selectedSong, modalOpen, closeModal } = useSong();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByPlays, setSortByPlays] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const filteredSongs = songs.filter((song) =>
  song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSongs = sortByPlays
  ? [...filteredSongs].sort((a, b) => b.plays - a.plays)
  : filteredSongs;


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
  

  return (
    <div className="song-container">
      <h1 className="song-title"> 🔊 My YouTube player</h1>

      <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark mode"}
      </button>

      {!modalOpen && (
        <form className="song-form" onSubmit={handleSubmit}>
          <input className="song-input" placeholder="Song name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="song-input" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
          <button className="song-button" type="submit">Add Song</button>
        </form>
      )}
      <input className="sort-input" type="text" placeholder="Search song" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <button className="sort-button" onClick={() => setSortByPlays(!sortByPlays)}>
        Sort by views {sortByPlays ? "⬆️" : "⬇️"}
      </button>
       {!modalOpen && (
        <SongList songs={sortedSongs} handlePlay={handlePlay} removeSong={removeSong} />
       )}
        <VideoModal song={selectedSong} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Song;
