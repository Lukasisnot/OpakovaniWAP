import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllGame } from "../../models/game"
import ListLink from "./ListLink";

export function ViewAll() {
  const [games, setGames] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllGame();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setGames(res.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Games nuh uh</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Games on the way</p>
      </>
    )
  }

  if (!isLoaded){
    return (
      <>
        <p>Games loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Game list</h1>
        {
          games.map((game, index) => (
            <ListLink key={index} {...game} />
          ))
        }

        <Link to={"/"}>
          <button>Home</button>
        </Link>
    </>
  )
  }