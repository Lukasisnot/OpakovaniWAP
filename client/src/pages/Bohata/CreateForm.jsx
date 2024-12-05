import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBohata } from "../../models/bohata";

export function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createBohata(formData);
    if (res.status === 201)
      return navigate(`/created-bohata/${res.payload._id}`);
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
      <h1>Create Bohata</h1>
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
          name="salary"
          placeholder="Enter salary"
          required
          onChange={handleInput}
        />
        <input
          type="checkbox"
          name="knee"
          placeholder="Has knee?"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>
          Add new bohata
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
