import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createGame } from "../../models/game";

export function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createGame(formData);
    if (res.status === 201)
      return navigate(`/created-game/${res.payload._id}`);
    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <h1>Create Game</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="releaseDate"
          placeholder="Enter date"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          name="sales"
          placeholder="Enter sales"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>
          Add new game
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
