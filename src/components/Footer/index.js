
import styled from "styled-components";

function Footer({type, posterURL, title, weekday, time}) {
  return (
    <footer>
      <div className="film-poster">
        <img src={posterURL} alt={title}/>
      </div>
      <div>
        <div className="film-title">{title}</div>
        {type && <div className="film-title">{weekday} - {time}</div>}
      </div>
    </footer>
  )
}

export default Footer;


const PageFooter = styled.footer`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-left: 10px;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
    position: fixed;
    bottom: 0;
    left:0;
    margin-top: 200px;
    .film-poster
{
   height: 89px;
   width: 64px;
   border-radius: 2px;
   background-size: cover;
   background-color: #fff;
   display: flex;
   justify-content: center;
}
.film-poster img
{
    height: 72px;
    width: 48px;
}
.film-title
{
    font: 400 26px/30px "Roboto";
    color: #293845;
}
`

