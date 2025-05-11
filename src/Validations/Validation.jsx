// Función para validar si la URL pertenece a YouTube
export const isValidYouTubeUrl = (url) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  return regex.test(url);
};

// Función para verificar si una canción ya está agregada
export const isDuplicateUrl = (url, songs) => {
  return songs.some((song) => song.url === url);
};