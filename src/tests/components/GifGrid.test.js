import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; 
import  GifGrid  from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGif';

jest.mock('../../hooks/useFetchGif'); //Create component

describe('Testing component "GifGrid.js"', ()=>{
  //(1) Inicializacion
  const category = "venom"; 

  //(2) Estimulo
  let wrapper;

  test('Take Snapshot from "GifGrid"', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    wrapper = shallow( <GifGrid 
      category = { category }
    /> ); 

    //(3) Observacion
    expect( wrapper ).toMatchSnapshot();

  });

  test('Must show items when load the images with "useFetchGifs"', () => {
    const gifs = [{
      id: 'abc123',
      url: 'https:/localhost:3000/anythings.jpg',
      title: 'AnyThings'
    },
    {
      id: 'abc345',
      url: 'https:/localhost:3500/anythings.jpg',
      title: 'AnyThings'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    wrapper = shallow( <GifGrid 
      category = { category }
    /> ); 

    //(3) Observacion
    expect( wrapper ).toMatchSnapshot();
    // 1. The paragraph should not exist 
    expect( wrapper.find('p').exists() ).toBe( false );
    // 2. GifGridItem should exist 
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });

});