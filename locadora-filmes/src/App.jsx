import { BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/home"
import Filme from "./pages/Filmes/Filme";
import Header from "./Components/Header/Header";
import Erro from "./pages/Erro/Erro";
import Favoritos from "./pages/Favoritos/Favorito";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/filme/:id" element={ <Filme /> } />
            <Route path="/favoritos" element= { <Favoritos /> } />

            <Route path="*" element={ <Erro />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
