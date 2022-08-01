import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import{ SelfBuildingSquareSpinner} from 'react-epic-spinners'
import Session from "../session/Session";
import Footer from "../footer/Footer";


export default function SessionsPage()
{
    const {movieID}=useParams();
    const [movie,setMovie]=useState(null);

        
  useEffect(()=>{
    const URL=`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`
    const response = axios.get(URL);
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
      <>
         <Container>
         <h1>Selecione o horário</h1>
          <Sessions>{sessionsRender()}</Sessions>    
        </Container>
        <Footer movie={movie}></Footer>
        </> 
        
    )
}

const Sessions = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 28px;
margin-bottom: 50px
`;
const Container = styled.div`
margin: 70px 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1 {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #293845;

  height: 100px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;