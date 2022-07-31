import { useState } from 'react';
import axios from 'axios';

 function MoviesDATA()
 {
    const moviesList = []
    const request = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
    request.then((result)=> moviesList.map(result.data));

    return moviesList;
 } 
 export default MoviesDATA();