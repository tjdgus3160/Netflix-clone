import React from "react";
import Row from "@components/Row";
import Banner from "@components/Banner";
import Nav from "@components/Nav";
import "./App.css";

import { requests as req } from "@api";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={req.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={req.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={req.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={req.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={req.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={req.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={req.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={req.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
