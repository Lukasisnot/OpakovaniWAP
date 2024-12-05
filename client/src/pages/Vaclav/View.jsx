import { Link, useParams, useNavigate } from "react-router-dom";
import { getVaclav, deleteVaclav } from "../../models/vaclav"
import { useState, useEffect } from "react";

export function View() {
  const { id } = useParams();
  const [vaclav, setVaclav] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getVaclav(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setVaclav(data.payload);
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
    if (vaclav.name === formData) {
      const data = await deleteVaclav(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Wrong input!");
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Vaclav nuh uh</p>
      </>
    )
  }

  if (isLoaded === false) {
    return (
      <>
        <p>Vaclav on the way...</p>
      </>
    )
  }

  return (
      <>
          <h1>Vaclav</h1>
          <p>{id}</p>
          <p>Name: {vaclav.name}</p>
          <p>wifi zasuvky: {vaclav.wifiZasuvky}</p>
          <p>koleno offset: {vaclav.kolenoOffset}</p>
          <form>
            <input type="text" placeholder="Enter vaclav name" onChange={handleInput} />
            <button onClick={handleButton}>Delete vaclav</button>
            <p>{info}</p>
          </form>
          <Link to={`/update-vaclav/${id}`}>
            <button>
              Update vaclav
            </button>
          </Link>
          <Link to={"/view-all-vaclav"}>
            <button>Back</button>
          </Link>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
      </>
    )
  }