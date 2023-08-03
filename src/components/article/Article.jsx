import React, { useState } from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const Article = ({ imgUrl, title, paragraph, link, linktext, vidUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="prt__game-container_article">
      <div className="prt__game-container_article-image">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="prt__game-container_article-content">
        <div>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
        <Link
          to={link}
          className={`prt__game-container_article-content_learnmore ${
            vidUrl ? 'prt__game-container_article-content_watch-animation' : ''
          }`}
          onClick={() => vidUrl && toggleVideo()} // Check if vidUrl exists, then toggle video
        >
          {linktext}
        </Link>
      </div>
      {showVideo && vidUrl && (
        <div className="fullscreen-video">
          <video controls autoPlay>
            <source src={vidUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-video" onClick={toggleVideo}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Article;
