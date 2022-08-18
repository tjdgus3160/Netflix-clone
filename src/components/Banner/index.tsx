import React, { useEffect, useState } from "react";
import { imageUrl, truncate } from "@utils";
import { axios, requests } from "@api";
import { Movie } from "@types";
import "./style.css";

function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const mainMovie = request.data.results[Math.floor(Math.random() * request.data.results.length)];

      setMovie(mainMovie);
    }

    fetchData();
  }, []);

  if (!movie) {
    return <div>loading</div>;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${imageUrl(movie.backdrop_path)}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title || movie?.name || movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
