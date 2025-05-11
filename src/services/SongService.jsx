import { SongModel } from "../models/SongModel";

class SongService {
  items = JSON.parse(localStorage.getItem("songs")) || [];
  listeners = [];

  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener([...this.items]));
  }

  addSong(name, url) {
    const song = new SongModel(name, url);
    this.items.push(song);
    localStorage.setItem("songs", JSON.stringify(this.items));
    this.notifyListeners();
  }

  incrementPlays(url) {
    if(!this.songs){
      console.error("No songs found in localStorage");
      return [];
    }
    this.songs = this.songs.map(song =>
    song.url === url ? { ...song, plays: song.plays + 1 } : song
  );
  localStorage.setItem("songs", JSON.stringify(this.songs));
  return this.songs;
  }

  removeSong(url) {
    this.items = this.items.filter((item) => item.url !== url);
    localStorage.setItem("songs", JSON.stringify(this.items));
    this.notifyListeners();
  }

  getItems() {
    return this.items;
  }
}

export const songService = new SongService();
