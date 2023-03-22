import React, { useState } from 'react';
import './stylesheet/GifExpertApp.css';
import { AddCategory } from './components/AddCategoryApp';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState(["Samurai X"]);

  return (
    <div className="GifExpert_Container">
    
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />

      <div className="GifExpert_img">
        
          {categories.map((value) => {
            //Enlaze de componentes
            return <GifGrid key={value} category={value} />;
          })}
        
      </div>
      
    </div>
  );
}


export default GifExpertApp;
