import { Link, useParams, useNavigate } from "react-router-dom";
import { getGame, deleteGame } from "../../models/game"
import { useState, useEffect } from "react";

export function View() {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getGame(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setGame(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleInput = (e) => {
    setFormData(e.target.value);
  }

  const handleButton = async (e) => {
    e.preventDefault();
    if (game.name === formData) {
      const data = await deleteGame(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input!");
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Game nuh uh</p>
      </>
    )
  }

  if (isLoaded === false) {
    return (
      <>
        <p>Game on the way...</p>
      </>
    )
  }

  return (
      <>
          <h1>Game</h1>
          <p>{id}</p>
          <p>Name: {game.name}</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Sales: {game.sales}</p>
          <form>
            <input type="text" placeholder="Enter game name" onChange={handleInput} />
            <button onClick={handleButton}>Delete game</button>
            <p>{info}</p>
          </form>
          <Link to={`/update-game/${id}`}>
            <button>
              Update game
            </button>
          </Link>
          <Link to={"/view-all-game"}>
            <button>Back</button>
          </Link>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
      </>
    )
  }