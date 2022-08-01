import styled from "styled-components"
import{ SelfBuildingSquareSpinner} from 'react-epic-spinners'
export default function Footer({movie})
{
    if(movie!==null)
    {
        const {posterURL,title}=movie;
        return( 
          <DivFooter>
          <img src={posterURL}/>
           <h1>{title}</h1>
          </DivFooter>
        )
    }
    else
       {
           return <SelfBuildingSquareSpinner color="#C3CFD9" />
       }
}
const DivFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: #9EADBA;
  img {
    width: 48px;
    height: 72px;
    padding: 8px;
    background-color: white;
    border-radius: 2px;
    margin: 10px;
    box-shadow: 0px 2px 4px 0px #0000001a;
    border: 1px solid #9eadba;
  }
  h1 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

color: #293845;

    font-size: 26px;
  }
`;

