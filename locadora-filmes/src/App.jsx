import { BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/home"
import Filme from "./pages/Filmes/Filme"
import Header from "./Components/Header/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/filme/:id" element={ <Filme /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
