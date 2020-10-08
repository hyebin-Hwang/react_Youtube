import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Videos from "./component/videos/videos";
import VideoDetail from "./component/video_detail/video_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    youtube
      .getVideos() //
      .then((videos) => setVideos({ videos }));
  }, [youtube]);

  const handleSearch = (query) => {
    youtube
      .onSearch(query) //
      .then((videos) => setVideos({ videos }));
    setSelected(null);
  };

  const handleClick = (video) => {
    setSelected(video);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className={styles.contents}>
        {selected ? <VideoDetail selected={selected} /> : ""}
        {videos.length === 0 ? (
          "wating..."
        ) : (
          <Videos videos={videos} onClickVideo={handleClick} />
        )}
      </div>
    </>
  );
};
export default App;
