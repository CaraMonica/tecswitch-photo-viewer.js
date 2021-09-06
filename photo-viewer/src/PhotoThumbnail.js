import React from 'react'

const PhotoThumbnail = ({url, id, onSelectPhoto}) => <img src={url} alt="" id={`thumbnail${id}`} className="grid-img" onClick={() => onSelectPhoto(url)} />


export default PhotoThumbnail;