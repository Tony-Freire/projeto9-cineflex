import { Link } from "react-router-dom"
import styled from "styled-components"




export default function Movie({id,title,poster})
{
    return (
        <Link to={`/sessao/${id}`}>
        <Poster>
            <img src={poster} alt={title}/>
        </Poster></Link>
    )
}
const Poster = styled.div`
 padding: 8px;
  background-color: white;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  margin: 10px 15px;
img{
width: 129px;
height: 193px;
}

`