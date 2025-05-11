import React from "react";

const VideoModal = ({ song, isOpen, onClose }) => {
  if (!isOpen || !song) return null; // Si no hay canción o el modal está cerrado, no renderizar nada

  return (
    <div className="modal">
      <button onClick={onClose}>❌ Cerrar</button>
      <h2>{song.name}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${song.url.split("v=")[1]}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoModal;