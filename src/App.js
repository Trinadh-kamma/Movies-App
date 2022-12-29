// key = 6016edb3

import { useState, useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=6016edb3';

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=> {
    searchMovies("Spiderman")
  }, [])

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await  response.json();
      setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          value={searchTerm}
          placeholder="search for a movie"
          onChange={(event)=>{setSearchTerm(event.target.value)}}
        />

        <img
        src={SearchIcon}
        alt="search"
        onClick={()=> {searchMovies(searchTerm)}}
        />
      </div>

      {movies?.length>0? (
        <div className="container">
        {movies.map((movie)=> (
          <MovieCard movie={movie}/>
        ))}
      </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}

      
    </div>
  )
}

export default App