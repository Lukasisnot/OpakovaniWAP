import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createVaclav } from "../../models/vaclav";

export function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const sendData = async () => {
    const res = await createVaclav(formData);
    if (res.status === 201)
      return navigate(`/created-vaclav/${res.payload._id}`);
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
      <h1>Create Vaclav</h1>
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
          name="wifiZasuvky"
          placeholder="Enter number of wifi zasuvky"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          name="kolenoOffset"
          placeholder="Enter koleno offset"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>
          Add new vaclav
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
