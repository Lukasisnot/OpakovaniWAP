import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
        <h1>Richman home</h1>
        <Link to={"/create-monkey"}>
          <p>Create monkey</p>
        </Link>
        <Link to={"/view-all-monkey"}>
          <p>Monkey list</p>
        </Link>
    </>
  )
}
