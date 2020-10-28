import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner.js';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
    <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
    <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="SCIENCE FICTION" fetchUrl={requests.fetchScienceFiction}/>
    

    </div>
  );

}

export default App;
