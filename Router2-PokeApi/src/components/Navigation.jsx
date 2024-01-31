import {NavLink} from "react-router-dom"
import {Navbar} from "react-bootstrap"
import poke from "../assets/imgs/poke.png"

export default function Navigation(){
    const setActiveClass = ({ isActive }) => (isActive ? "m-3 active" : "m-3")
  return (
    <Navbar className="d-flex justify-content-between px-4" variant="ligth" style={{background: "#58585A"}}>
        <Navbar.Brand>
          <img width="50" src={poke} alt="pokemon icon" />
        </Navbar.Brand>
        <div>
          <NavLink className={setActiveClass} to="/">
          Home
          </NavLink>
          <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
          </NavLink>
        </div>
    </Navbar>
  )
}
