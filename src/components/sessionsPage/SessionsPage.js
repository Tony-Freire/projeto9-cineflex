import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import{ SelfBuildingSquareSpinner} from 'react-epic-spinners'
import Session from "../session/Session";

export default function SessionsPage()
{
    const {movieID}=useParams();
    const [movie,setMovie]=useState(null);
    const URL=`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`
    const response = axios.get(URL);
        
        useEffect(()=>{
       
        response.then(({data})=> setMovie(data));
        response.catch(({response})=> alert(response.statusText));
       },[])
      function sessionsRender() 
      {
       if(movie!==null)
       {
           return movie.days.map(day=>{const{weekday,date,showtimes,id}=day;
           
           return <Session key={id} id={id} date={date} weekday={weekday} showtimes={showtimes}/>
        
        });
            
          
       }
       else
       {
           return <SelfBuildingSquareSpinner color="#C3CFD9" />
       }
        
       } 

    return( 
         <Container>
         <h1>Selecione o horário</h1>
          <Sessions>{sessionsRender()}</Sessions> 
        </Container>
        
        
    )
}

const Sessions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;