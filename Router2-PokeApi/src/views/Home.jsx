import logo from "../assets/imgs/pikachu.png"

export default function Home() {
  return (
    <div className="mt-5 text-center">
      <h1>Bienvenido Maestro Pokemón</h1>
      <img height="300" src={logo} alt="pikachu" />
    </div>
  )
}