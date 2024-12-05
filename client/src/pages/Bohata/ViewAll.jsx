import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllBohata } from "../../models/bohata"
import ListLink from "./ListLink";

export function ViewAll() {
  const [bohatas, setBohatas] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllBohata();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setBohatas(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Bohatas nuh uh</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Bohatas on the way</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Bohatas loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Bohata list</h1>
        {
          bohatas.map((bohata, index) => (
            <ListLink key={index} {...bohata} />
          ))
        }

        <Link to={"/"}>
          <button>Home</button>
        </Link>
    </>
  )
  }