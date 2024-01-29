import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import api from "../../Services/api";
import { CgSpinner } from "react-icons/cg"


import "./Filme.css"


const Filme = () => {

  const { id } = useParams();
  const navigate = useNavigate()

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "7fe2c2f94efd5141f2d2d9245f7bd570",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data)
        setLoading(false)
      })
      .catch(() => {
        console.log("filme não encontrado")
        navigate("/", { replace: true });
        return;
      })
    }
    loadFilme()

    return (
      console.log("componente foi desmontado")
    )
  }, [navigate, id])

  function salvarFilmes(){
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some( ( Salvos ) => Salvos.id === filme.id)

    if(hasFilme) {
      alert("Esse filme ja foi salvo")
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso")
  }

  if(loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
        <CgSpinner className='spinner' />
      </div>
      )
  } 

  return (
    <section className="container-filme">
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>
      <div className="area-button">
        <button onClick={salvarFilmes}>Salvar</button>
        <button>
          <a 
            target="blank"
            rel="external" 
            href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>      
    </div>
    </section>
  )
}

export default Filme