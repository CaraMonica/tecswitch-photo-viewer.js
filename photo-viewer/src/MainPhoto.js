import React from "react";

const MainPhoto = ({ url }) => (
  <div id="main-photo-container">
    <img src={url} id="main-photo" alt="main" />
  </div>
);

export default MainPhoto;
