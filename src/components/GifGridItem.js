import React from 'react';
import '../stylesheet/GifGridItem.css';
import "animate.css";

const GifGridItem = ({ title, url })=>{
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
}

export default GifGridItem;