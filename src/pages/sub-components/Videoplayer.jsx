import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video");

      videoElement.classList.add("video-js", "vjs-big-play-centered");
      videoElement.setAttribute("controls", true);
      videoElement.setAttribute("playsinline", true);

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        if (onReady) onReady(player);
      }));
    } else {
      const player = playerRef.current;
      if (player) {
        player.src(options.sources);
        player.autoplay(options.autoplay || false);
      }
    }
  }, [options]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player style={{ width: "600px" }}>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
