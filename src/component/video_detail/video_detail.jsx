import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ selected, selected: { snippet } }) => {
  console.log(snippet);
  return (
    <div className={styles.video_detail}>
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="405"
        src={`https://www.youtube.com/embed/${selected.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
  );
};

export default VideoDetail;
