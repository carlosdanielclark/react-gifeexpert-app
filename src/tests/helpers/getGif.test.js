import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; 
import { getImgGif } from '../../helpers/getGif'

describe('Testing helpers "getGif.js" Fetch', ()=>{
  //(1) Inicializacion


  test('Should bring ten (10) elements', async() => {
    //(2) Estimulo
    const gifs = await getImgGif('One Punch');
    
    //(3) Observacion
    expect( gifs.length ).toBe( 10 )
  });

  test('Should bring empty [] array', async() => {
    //(2) Estimulo
    const gifs = await getImgGif('');
    
    //(3) Observacion
    expect( gifs.length ).toBe( 0 )
  });
  
});