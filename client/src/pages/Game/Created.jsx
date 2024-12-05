import { useParams, Link } from "react-router-dom"

export function Created() {
    const { id } = useParams();

  return (
    <>
        <h1>New game created: {id}</h1>
        <Link to={`/view-game/${id}`}>
            <p>View game</p>
        </Link>
        <Link to={`/`}>
            <p>Return home</p>
        </Link>
    </>
  )
}
