
  import styled from "styled-components";
import loadingImg from "../../assets/loading.svg"

export default function Load() {
  return (
    <LoadSvg>
      <img src={loadingImg} alt="loading" />
    </LoadSvg>
  )
}

const LoadSvg = styled.div`
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`