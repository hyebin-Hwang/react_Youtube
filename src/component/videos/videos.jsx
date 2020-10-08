import React from "react";
import VideoList from "../video_List/video_list";
import styles from "./video.module.css";

const Videos = ({ videos: { videos }, onClickVideo }) => {
  return (
    <ul className={styles.content_container}>
      {videos.map((video, index) => (
        <VideoList video={video} key={index} onClickVideo={onClickVideo} />
      ))}
    </ul>
  );
};

export default Videos;
