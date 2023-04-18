import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; 
import { AddCategory } from '../../components/AddCategoryApp'

describe('Testing component "AddCategoryApp.js"', ()=>{
  //(1) Inicializacion
  const setCategories = jest.fn();
  const categories = "venom"; 

  //(2) Estimulo
  let wrapper 

  beforeEach(()=>{
    jest.clearAllMocks(); //Clean simulation
    wrapper = shallow( <AddCategory 
      setCategories ={ setCategories } 
      categories = { categories }
      /> );
  })
  
  test('Take Snapshot from "AddCategory"', () => {

    //(3) Observacion
    expect( wrapper ).toMatchSnapshot();

  });

  test('Must change the text box in the "input"', () => {

    const value = 'One puch'|| categories;

    //(3) Observacion
    // 1. simulate input-change
    wrapper.find('input').simulate('change', { target: { value } });
    // 2. set input-value is 'new_value'
   expect( wrapper.find('input').prop('value') ).toBe('One puch');

  });

  test('Should not post the information with "submit"', () => {
   
    //(3) Observacion
    // 1. simulate form-submit
    wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });
    // 2. simulate setCategorie
    expect( setCategories ).not.toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(0);
   
  });

  test('Must call "setCategories" and clean text box', () => {

    const value = 'Hunter X Hunter';

    //(3) Observacion
    // 1. simulate input-change
    wrapper.find('input').simulate('change', { target: { value } });
    // 2. simulate form-submit
    wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });
    // 3. simulate setCategorie
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
    // 4. set input-value in 'empty'
   expect( wrapper.find('input').prop('value') ).toBe('');
  });
  
});