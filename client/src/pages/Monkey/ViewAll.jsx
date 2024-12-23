import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllMonkey } from "../../models/monkey"
import ListLink from "./ListLink";

export function ViewAll() {
  const [monkeys, setMonkeys] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllMonkey();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setMonkeys(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Monkeys nuh uh</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Monkeys on the way</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Monkeys loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Monkey list</h1>
        {
          monkeys.map((monkey, index) => (
            <ListLink key={index} {...monkey} />
          ))
        }

        <Link to={"/"}>
          <button>Home</button>
        </Link>
    </>
  )
  }