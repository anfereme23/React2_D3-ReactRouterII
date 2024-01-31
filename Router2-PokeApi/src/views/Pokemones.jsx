import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Pokemones() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState("")
  const navigate = useNavigate()
  const APIurl = "https://pokeapi.co/api/v2/pokemon"
  const getPokemon = async () => {
    const res = await fetch(APIurl)
    const {results} = await res.json()
    setPokemon(results)
  }
  useEffect(() => {
    getPokemon()
  }, [])
  const verDetail = async () => {
    navigate(`/pokemones/${pokemonSelected}`)
  }
  //if (!pokemon.name) return <h2>404</h2>

  return (
    <div className="mt-5 text-center">
      <h1>Seleccione un pokemón</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select value={pokemonSelected} className="form-select text-center" onChange={({target}) => setPokemonSelected(target.value)}>
          <option value='' disabled>Pokemones</option>
          {pokemon?.map((p)=>(
            <option key={p.name} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <Button className={`btn btn-dark ${(!pokemonSelected || pokemonSelected === '0') ? 'disabled' : ''}`} onClick={() => verDetail()}>Ver Detalle</Button>
      </div>
    </div>
  )
}
