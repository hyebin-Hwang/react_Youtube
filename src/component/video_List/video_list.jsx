import React from "react";
import styles from "./video_list.module.css";

const VideoList = ({ video, onClickVideo, video: { snippet } }) => {
  return (
    <li
      className={styles.video}
      onClick={() => {
        onClickVideo(video);
      }}
    >
      <img
        className={styles.img}
        src={`${snippet.thumbnails.medium.url}`}
        alt="thumbnails Img"
      />
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channelTitle}>{snippet.channelTitle}</p>
    </li>
  );
};

export default VideoList;
