import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./header/Header"
import HomePage from "./homePage/HomePage"
import SeatsPage from "./seatsPage/SeatsPage"
import SessionsPage from "./sessionsPage/SessionsPage"
import SucessPage from "./sucessPage/SucessPage"


export default function App()
{
    return(
        
      <BrowserRouter>
      <Header></Header>
      <Routes>   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/filme/:movieID" element={<SessionsPage/>}/>
        <Route path="/sessao/:seatID" element={<SeatsPage/>}/>
        <Route path="/sucesso" element={<SucessPage/>}/>
      </Routes>

      </BrowserRouter>
          	
    )
}

