import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./style.css"

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
  
    promise.then((response) => setMovies(response.data))
  }, [])

  if(movies.length === 0)
    return<Loading/>

  return (
    <div className="page">
      <h1>Selecione o filme</h1>
        <div className="films-list">
          {movies.map((movie) => 
            <Link to={`/sessoes/${movie.id}`} key={movie.id} className="film-poster">
                <img src={movie.posterURL} alt={movie.title}/>
            </Link>
          )}
      </div>
    </div>
  )
}

