import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import { Button } from "react-bootstrap"

const Detail = () => {
    const navigate = useNavigate()
    const handleButton = () => {
    navigate('/pokemones')
}
    const {name} = useParams()
    const [pokemon, setPokemon] = useState({})
    const APIurl = "https://pokeapi.co/api/v2/pokemon"
    const getPokemon = async (name) => {
        const res = await fetch(`${APIurl}/${name}`)
        const data = await res.json()
        const src = data.sprites.other.dream_world.front_default
        const stats = data.stats.map((stat) => ({
           name: stat.stat.name,
           base: stat.base_stat
        }))
        const types = data.types.map(({ type }) => type.name).join(' ')
        setPokemon({name, stats, src, types})
    }
    useEffect(() =>{
        getPokemon(name)
    }, [name])
    return (
    <div className="text-center">
    <PokemonCard pokemon = {pokemon} />
    <Button className="btn btn-dark" onClick={handleButton}>
    Volver
    </Button>
    </div>
   )
}
export default Detail