import styled from "styled-components"
import { Link } from 'react-router-dom';



export default function Session({weekday,date,showtimes}){

    function renderSession() {
        return showtimes.map (({id, name })=>{
    
          return (
            <Link key={id} to={`/sessao/${id}`}>
              <button>{name}</button>
            </Link>
          );
        });
      }
return (
<>
<Container>
        <p>
        {weekday} - {date}
      </p>
   {renderSession()}
</Container>

</>
    
)
}

const Container = styled.div`
  min-width: 375px;
  max-width: 500px;
  margin: 10px 0;

  p {
    width: 100%;
    display: flex;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;

color: #293845;

    align-items: center;
    height: 60px;
    font-size: 20px;
  }
  button {
    font-size: 18px;
    background-color: #E8833A;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 15px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`;