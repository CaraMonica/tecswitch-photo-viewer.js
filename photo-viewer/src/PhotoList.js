import React from "react";

const createImgListItem = (url, i, onSelectPhoto) => (
  <li className="grid-img-container" key={`photo-container${i}`}>
    <img src={url} alt="" id={`photo${i}`} className="grid-img" onClick={() => onSelectPhoto(url)} />
  </li>
);

const PhotoList = ({ onSelectPhoto, imageUrlList }) => (
  <ul className="photo-grid">{imageUrlList.map((url, i) => createImgListItem(url, i, onSelectPhoto))}</ul>
);

export default PhotoList;
