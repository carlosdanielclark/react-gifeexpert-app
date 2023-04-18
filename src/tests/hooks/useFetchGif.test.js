import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; 
import { useFetchGifs } from '../../hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing custom-hooks "useFetchGif.js"', ()=>{
  //(1) Inicializacion

  test('Must show initial state', async () => {
    //(2) Estimulo
    const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( 'venom' ) );
    
    const {data, loading} = result.current;
    await waitForNextUpdate();
    
    //(3) Observacion
    // 1. The data moust be empty 
    expect( data ).toEqual([]);
    // 2. 'loading' moust be true 
    expect( loading ).toBe(true);

  });

  
  test('Must return at image array and loading in false', async () => {
    //(2) Estimulo
    const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( 'venom' ) );
    await waitForNextUpdate();
    
    const {data, loading} = result.current;

    //(3) Observacion
    // 1. The data moust be empty 
    expect( data.length ).toBe(10);
    // 2. 'loading' moust be true 
    expect( loading ).toBe(false);
  });  
  

});