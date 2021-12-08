import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movies';
import "./App.css";

function App () {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoveis = async () => {
    const { data : {data : { movies }} } 
    = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(()=> {
    getMoveis();
  },[])


    return(
      <section className="container">
        {isLoading ? 
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        : 
          (
            <div className="movies">
              {movies.map(movie => 
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />)}
            </div>
          )
        }
      </section>
    )
 
}

export default App;
