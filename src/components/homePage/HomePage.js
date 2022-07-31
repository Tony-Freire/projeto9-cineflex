import axios from "axios";
import { useEffect,useState } from "react";
import styled from "styled-components";
import Movie from "../movie/Movie";




export default function HomePage(){
const [movies,setMovies]=useState([]);
const URL="https://mock-api.driven.com.br/api/v7/cineflex/movies"


   const response = axios.get(URL);

   useEffect(()=>{
    response.then(({data})=> setMovies(data));
    response.catch(({response})=> alert(response.statusText));
   },[])
   
    return(
        <>
        <Container>
            <h1>Selecione o filme</h1>
         <Posters>
         {
        movies.map(movie=>{const {id,posterURL,title}=movie
            
             return <Movie
              key={id}
              id={id}
              title={title}
              poster={posterURL}/>
         } 
         )}
         </Posters>
         </Container>
        </>
    )
}
const Container = styled.div`
margin: 70px 30px;
display: flex;
flex-direction: column;
justify-content: center;margin: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    
    height: 110px;
    left: 0px;
    top: 67px;

    top: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

color: #293845;

  }
`
const Posters = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`