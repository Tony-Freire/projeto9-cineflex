import styled from "styled-components";
import loadingImg from "../../assets/loading.svg"

export default function Loading() {
  return (
    <LoadingSvg>
      <img src={loadingImg} alt="loading" />
    </LoadingSvg>
  )
}



const LoadingSvg = styled.div`
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
