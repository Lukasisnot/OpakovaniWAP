import { Link, useParams, useNavigate } from "react-router-dom";
import { getBohata, deleteBohata } from "../../models/bohata"
import { useState, useEffect } from "react";

export function View() {
  const { id } = useParams();
  const [bohata, setBohata] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
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

  const handleInput = (e) => {
    setFormData(e.target.value);
  }

  const handleButton = async (e) => {
    e.preventDefault();
    if (bohata.name === formData) {
      const data = await deleteBohata(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input!");
  }

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
          <h1>Bohata</h1>
          <p>ID: {id}</p>
          <p>Name: {bohata.name}</p>
          <p>Has knee:
            <input
              type="checkbox"
              name="knee"
              checked={bohata.knee}
              readOnly
            />
          </p>
          <p>Salary: {bohata.salary}</p>
          <form>
            <input type="text" placeholder="Enter bohata name" onChange={handleInput} />
            <button onClick={handleButton}>Delete bohata</button>
            <p>{info}</p>
          </form>
          <Link to={`/update-bohata/${id}`}>
            <button>
              Update bohata
            </button>
          </Link>
          <Link to={"/view-all-bohata"}>
            <button>Back</button>
          </Link>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
      </>
    )
  }