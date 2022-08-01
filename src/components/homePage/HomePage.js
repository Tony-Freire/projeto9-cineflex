import axios from "axios";
import { useEffect,useState } from "react";
import styled from "styled-components";
import Movie from "../movie/Movie";
import{ SelfBuildingSquareSpinner} from 'react-epic-spinners'


export default function HomePage(){

  const [movies,setMovies]=useState([]);
  
  
     useEffect(()=>{
      const URL="https://mock-api.driven.com.br/api/v7/cineflex/movies";
      const response = axios.get(URL);
      
      response.then(({data})=> setMovies(data));
      response.catch(({response})=> alert(response.statusText));
     },[])
     function moviesTheatersRender() 
     {
      if(movies.length>0)
      {
          return movies.map(({id,posterURL,title})=>(
              
              <Movie
              key={id}
              id={id}
              title={title}
              poster={posterURL}/>))
      }
      else
      {
          return <SelfBuildingSquareSpinner color="#C3CFD9" />
      }
      
      } 

    return(
        <>
        <Container>
            <h1>Selecione o filme</h1>
         <Posters>
         {moviesTheatersRender()}
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