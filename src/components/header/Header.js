import styled from"styled-components"



export default function Header()
{
    return(
    <Title>
        <h1>CINEFLEX</h1>
    </Title>
    )
}
const Title = styled.div`
background-color: #C3CFD9;

position: fixed;
top: 0;
left: 0;
right: 0;
height: 67;
display: flex;
justify-content: center;
align-items: center;
h1{
font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 34px;
color: #E8833A;
}

`;