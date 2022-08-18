import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import { axios } from "@api";
import { imageUrl } from "@utils";
import "./style.css";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

function Row({ title, fetchUrl, isLargeRow }: Props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url: string) => {
          // https://www.youtube.com/watch?v=trailerUrl
          const urlParams = new URLSearchParams(new URL(url).search);
          const v = urlParams.get("v");

          if (v) {
            setTrailerUrl(v);
          }
        })
        .catch((error: Error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie: any) => (
          <img
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={imageUrl(isLargeRow ? movie.poster_path : movie.backdrop_path)}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
