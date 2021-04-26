import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

//the images list containing queries
const ImageList = props => {
  // the image array obj
  const images = props.images.map(image => {
    //the source with key
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
