import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateBohata, getBohata } from "../../models/bohata";

export function UpdateForm() {
  const { id } = useParams();
  const [bohata, setBohata] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBohata(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBohata(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const sendData = async () => {
    const res = await updateBohata(id, formData);
    if (res.status === 200)
      return navigate(`/view-bohata/${res.payload._id}`);
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
        <p>Bohata nuh uh</p>
      </>
    )
  }

  if (isLoaded === false) {
    return (
      <>
        <p>Bohata on the way...</p>
      </>
    )
  }

  return (
    <>
      <h1>Update Bohata</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={bohata.name}
        />
        <input
          type="text"
          name="salary"
          placeholder="Enter salary"
          required
          onChange={handleInput}
          defaultValue={bohata.salary}
        />
        <input
          type="checkbox"
          name="knee"
          placeholder="Has knee?"
          required
          onChange={handleInput}
          checked={bohata.knee}
        />
        <button onClick={handleButton}>
          Update bohata
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
