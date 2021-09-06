import React from "react";
import PhotoThumbnail from "./PhotoThumbnail";

const createImgListItem = (url, i, onSelectThumbnail, selectedThumbnail) => (
  <li className="grid-img-container">
    <PhotoThumbnail url={url} id={i} onSelectThumbnail={onSelectThumbnail} selectedThumbnail={selectedThumbnail}/>
  </li>
);

const PhotoList = ({ onSelectThumbnail, imageUrlList, selectedThumbnail}) => (
  <ul className="photo-grid">{imageUrlList.map((url, i) => createImgListItem(url, i, onSelectThumbnail, selectedThumbnail))}</ul>
);

export default PhotoList;
