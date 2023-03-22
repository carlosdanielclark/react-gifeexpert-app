import React from 'react';
import  GifGridItem from './GifGridItem.js';
import { useFetchGifs } from '../hooks/useFetchGif.js'; 

const GifGrid = ({ category }) => {

  const { data:image, loading }=useFetchGifs( category );

  return (
    <> 
      {loading && <p className="animate_animated animate_flash">Loading</p>}
      
      {image.map((img) => {
        return <GifGridItem key={img.id} title={img.title} url={img.url} />;
      })}
    </>
  );
}

export default GifGrid;

 