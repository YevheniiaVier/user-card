import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import { VideoContainer } from "./Video.styled";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player = null;

    const initializePlayer = () => {
      player = videojs(
        videoRef.current);
    };

    if (videoRef.current && !player) {
      initializePlayer();
    }
  }, [videoRef]);

  return (
    <VideoContainer>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        controls
        // autoPlay
        width="640"
        height="264"
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=P73posqEc84"}], "youtube": { "customVars": { "wmode": "transparent" } } }'
      ></video>
    </VideoContainer>
  );
};

export default Video;
