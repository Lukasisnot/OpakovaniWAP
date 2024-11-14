import { useParams, Link } from "react-router-dom"

export function Created() {
    const { id } = useParams();

  return (
    <>
        <h1>New monkey created: {id}</h1>
        <Link to={`/view-monkey/${id}`}>
            <p>View monkey</p>
        </Link>
        <Link to={`/`}>
            <p>Return home</p>
        </Link>
    </>
  )
}
