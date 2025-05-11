export class SongModel {
  constructor(name, url) {
    this.name = name;
    this.url = url;
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
}
