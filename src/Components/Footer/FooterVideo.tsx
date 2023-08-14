import React from "react";

const FooterVideo: React.FC = () => {
  return (
    <div id="footer">
      <h1>Footer</h1>
      <iframe
        width="660"
        height="365"
        src="https://www.youtube.com/embed/FfD2nwY9fxQ"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FooterVideo;
