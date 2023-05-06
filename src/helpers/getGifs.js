export const getGifs= async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=M4krzdd1xFNOs4ZFtYOVznWp4qkVS2F5&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data }= await resp.json();
  
    const gifs =data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
     
      return gifs
  }