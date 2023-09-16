export const fetchPopularMovies = async () => {
    const API_KEY = process.env.API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const data = await res.json();
    return data.results;
  };