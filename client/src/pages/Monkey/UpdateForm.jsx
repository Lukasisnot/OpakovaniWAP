import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateMonkey, getMonkey } from "../../models/monkey";

export function UpdateForm() {
  const { id } = useParams();
  const [monkey, setMonkey] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMonkey(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMonkey(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const sendData = async () => {
    const res = await updateMonkey(id, formData);
    if (res.status === 200)
      return navigate(`/view-monkey/${res.payload._id}`);
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
        <p>Monkey nuh uh</p>
      </>
    )
  }

  if (isLoaded === false) {
    return (
      <>
        <p>Monkey on the way...</p>
      </>
    )
  }

  return (
    <>
      <h1>Update Monkey</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={monkey.name}
          />
        <input
          type="text"
          name="race"
          placeholder="Enter race"
          required
          onChange={handleInput}
          defaultValue={monkey.race}
          />
        <input
          type="text"
          name="gender"
          placeholder="Enter gender"
          required
          onChange={handleInput}
          defaultValue={monkey.gender}
        />
        <button onClick={handleButton}>
          Update monkey
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
