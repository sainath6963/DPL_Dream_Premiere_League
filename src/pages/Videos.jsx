import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      // Create <video-js> element inside container
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, {
        controls: true,
        responsive: true,
        fluid: true,
        preload: "auto",
        sources: [
          {
            src: videoSrc,
            type: "application/x-mpegURL", // HLS MIME type
          },
        ],
      });

      playerRef.current.on("error", () => {
        console.error("Video.js player error:", playerRef.current.error());
      });
    } else if (playerRef.current) {
      // Update the source if videoSrc changes
      playerRef.current.src({ src: videoSrc, type: "application/x-mpegURL" });
      playerRef.current.load();
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoSrc]);

  return (
    <div
      data-vjs-player
      ref={videoRef}
      style={{ width: "100%", maxWidth: 600 }}
    />
  );
};

export default VideoPlayer;
