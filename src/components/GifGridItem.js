import React from 'react';
import '../stylesheet/GifGridItem.css';
import "animate.css";
import PropTypes from 'prop-types'; // ES6

const GifGridItem = ({ title, url })=>{
  return (
    <div className="animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
}

export default GifGridItem;

GifGridItem.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

}