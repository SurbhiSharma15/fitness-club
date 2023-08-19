export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  // a98026f795msh889cf9d6a343897p1a5a41jsnf163fd742c01
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data ;
}
// export default fetchData ;