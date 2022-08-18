const API_KEY = process.env.API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko`,
};

export default requests;
