import { useParams, Link } from "react-router-dom"

export function Created() {
    const { id } = useParams();

  return (
    <>
        <h1>New vaclav created: {id}</h1>
        <Link to={`/view-vaclav/${id}`}>
            <p>View vaclav</p>
        </Link>
        <Link to={`/`}>
            <p>Return home</p>
        </Link>
    </>
  )
}
