import React from "react";
import "./VideoModal.css"
import { useState, useEffect } from "react";

const VideoModal = ({ song, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timeout = setTimeout(() => setShowModal(false), 300); 
      return () => clearTimeout(timeout);
    }

  }, [isOpen]);

    const extractYouTubeID = (url) => {
      const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|embed|watch))\?v=|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };
    
  if (!song) return null; 
  
  const videoId = extractYouTubeID(song.url);
  if (!videoId) return <p>Video inválido</p>;


  return showModal ? (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={onClose}>❌ Cerrar</button>
        <h2>{song.name}</h2>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  ) : null;
};

export default VideoModal;