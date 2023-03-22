import { useState, useEffect } from "react";
import { getImgGif } from "../helpers/getGif";
import "animate.css";

export const useFetchGifs = (category)=>{
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //Condicion de la peticion
  useEffect(() => {
    getImgGif(category)
    .then((image) => {
      
      setTimeout(()=>{
        setState({
          data: image,
          loading: false,
        });
      },3000
      );

    });
  }, [category]);


  return state; //{data: [], loading: true}
}