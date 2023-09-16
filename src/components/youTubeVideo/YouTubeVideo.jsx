import React from 'react';
import styles from "./youtubeVideo.module.css"

const YouTubeVideo = ({ videoId, width, height, title }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.container}>
      <iframe
        width={width || '640'}
        height={height || '500'}
        src={embedUrl}
        title={title}
        allowFullScreen
        className={styles.videos}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;

