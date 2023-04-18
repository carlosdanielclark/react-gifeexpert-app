import React from 'react';
import '../stylesheet/GifGrid.css'
import  GifGridItem from './GifGridItem.js';
import { useFetchGifs } from '../hooks/useFetchGif.js'; 
import { PropTypes } from 'prop-types';

const GifGrid = ({ category }) => {

  const { data:image, loading }=useFetchGifs( category );

  return (
    <> 
      <h3 className='animate_animated animate_fadeIn'>{ category }</h3>
      
      {loading && <p className="animate_animated animate_flash">Loading</p>}

      <div className='GifGrid_container'>
        {image.map((img) => {
          return <GifGridItem key={img.id} title={img.title} url={img.url} />;
        })}
      </div>
    </>
  );
}

export default GifGrid;

GifGrid.propTypes={
  category: PropTypes.string.isRequired
} 