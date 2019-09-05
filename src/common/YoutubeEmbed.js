import React from "react";
import "./components/styles.css";

const YoutubeEmbed = ({ link, windowWidth, windowHeight }) => (
  <div className="video-responsive">
    <iframe
      width={windowWidth}
      height={windowHeight}
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
