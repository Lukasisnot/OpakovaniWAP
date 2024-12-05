import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateGame, getGame } from "../../models/game";

export function UpdateForm() {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
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

  const sendData = async () => {
    const res = await updateGame(id, formData);
    if (res.status === 200)
      return navigate(`/view-game/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

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
      <h1>Update Game</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={game.name}
        />
        <input
          type="text"
          name="releaseDate"
          placeholder="Enter release date"
          required
          onChange={handleInput}
          defaultValue={game.releaseDate}
        />
        <input
          type="number"
          name="sales"
          placeholder="Enter sales"
          required
          onChange={handleInput}
          defaultValue={game.sales}
        />
        <button onClick={handleButton}>
          Update game
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
