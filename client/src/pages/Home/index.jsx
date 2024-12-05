import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <h1>Richman home</h1>
      <h2>Monkey</h2>
      <Link to={"/create-monkey"}>
        <button>Create monkey</button>
      </Link>
      <Link to={"/view-all-monkey"}>
        <button>Monkey list</button>
      </Link>

      <h2>Bohata</h2>
      <Link to={"/create-bohata"}>
        <button>Create bohata</button>
      </Link>
      <Link to={"/view-all-bohata"}>
        <button>Bohata list</button>
      </Link>

      <h2>Game</h2>
      <Link to={"/create-game"}>
        <button>Create game</button>
      </Link>
      <Link to={"/view-all-game"}>
        <button>Game list</button>
      </Link>

      <h2>Vaclav</h2>
      <Link to={"/create-vaclav"}>
        <button>Create vaclav</button>
      </Link>
      <Link to={"/view-all-vaclav"}>
        <button>Vaclav list</button>
      </Link>
    </>
  )
}
