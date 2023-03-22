//Peticion a la API
export const getImgGif = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4AryCYB21GWUEbTtVHz7TXKYKGfZ3Z6b`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gift = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    //Devolver datos de la peticion
    return gift;
    
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};
