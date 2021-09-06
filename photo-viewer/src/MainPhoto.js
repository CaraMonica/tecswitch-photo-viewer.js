import React from "react";

const MainPhoto = ({ url, onChangePhoto }) => (
  <div id="main-image-container"><img src={url} id="main-image" onChangePhoto={onChangePhoto} alt="main" /></div>
);

export default MainPhoto;
