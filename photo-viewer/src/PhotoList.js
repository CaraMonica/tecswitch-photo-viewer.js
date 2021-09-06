import React from "react";
import PhotoThumbnail from "./PhotoThumbnail";

const createImgListItem = (url, i, onSelectPhoto) => (
  <li className="grid-img-container" key={`photo-container${i}`}>
    <PhotoThumbnail url={url} id={i} onSelectPhoto={onSelectPhoto} />
  </li>
);

const PhotoList = ({ onSelectPhoto, imageUrlList }) => (
  <ul className="photo-grid">{imageUrlList.map((url, i) => createImgListItem(url, i, onSelectPhoto))}</ul>
);

export default PhotoList;
