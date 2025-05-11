export class SongModel {
  constructor(name, url, plays = 0) {
    this.name = name;
    this.url = url;
    this.plays = plays;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    this.url = url;
  }

  getPlays(){
    return this.plays; 
  }

  setPlays(){
    this.plays = plays;
  }
}
