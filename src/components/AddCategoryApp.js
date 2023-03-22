import React, { useState }  from 'react';
import '../stylesheet/AddCategoryApp.css';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  //Manejo de tareas
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Validar dato
    if(inputValue.trim().length > 2){
      //Comunicacion de componentes
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  return (
    <div className='addCategory_container'>
      <form className="task_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Add Title"
          value={inputValue}
          onChange={handleChange}
        />
        <button>add +</button>
      </form>
      <h1>{categories}</h1>
    </div>
  );
};

//Manejo de tipado en las propiedades
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};