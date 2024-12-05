import { useParams, Link } from "react-router-dom"

export function Created() {
    const { id } = useParams();

  return (
    <>
        <h1>New bohata created: {id}</h1>
        <Link to={`/view-bohata/${id}`}>
            <p>View bohata</p>
        </Link>
        <Link to={`/`}>
            <p>Return home</p>
        </Link>
    </>
  )
}
