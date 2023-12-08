export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1cda5a15a71b7d7c663937fa5e133c40&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };