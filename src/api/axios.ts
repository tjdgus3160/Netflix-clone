import axios from "axios";

/** base url to make requests to the TMDB(The Movie DataBase) */
const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default instance;
