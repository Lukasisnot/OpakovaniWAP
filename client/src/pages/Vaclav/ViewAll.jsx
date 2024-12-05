import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllVaclav } from "../../models/vaclav"
import ListLink from "./ListLink";

export function ViewAll() {
  const [vaclavs, setVaclavs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllVaclav();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setVaclavs(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Vaclavs nuh uh</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Vaclavs on the way</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Vaclavs loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Vaclav list</h1>
        {
          vaclavs.map((vaclav, index) => (
            <ListLink key={index} {...vaclav} />
          ))
        }

        <Link to={"/"}>
          <button>Home</button>
        </Link>
    </>
  )
  }