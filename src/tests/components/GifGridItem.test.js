import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; 
import GifGridItem from '../../components/GifGridItem'

describe('Testing component "GifGridItem.js"', ()=>{
  //(1) Inicializacion
  const title = "Hello Carlos";
  const url = "http://localhost:3000/algo.jpg";  

  test('Take Snapshot of the "title"', () => {

  //(2) Estimulo
  const wrapper = shallow( <GifGridItem 
    title={ title } 
    url = { url }
    /> );
  //(3) Observacion
  expect( wrapper ).toMatchSnapshot();
  });
  
});
  