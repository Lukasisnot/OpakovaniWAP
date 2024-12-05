import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateVaclav, getVaclav } from "../../models/vaclav";

export function UpdateForm() {
  const { id } = useParams();
  const [vaclav, setVaclav] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
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

  const sendData = async () => {
    const res = await updateVaclav(id, formData);
    if (res.status === 200)
      return navigate(`/view-vaclav/${res.payload._id}`);
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
      <h1>Update Vaclav</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={vaclav.name}
        />
        <input
          type="text"
          name="wifiZasuvky"
          placeholder="Enter number of wifi zasuvky"
          required
          onChange={handleInput}
          defaultValue={vaclav.wifiZasuvky}
        />
        <input
          type="number"
          name="kolenoOffset"
          placeholder="Enter koleno offset"
          required
          onChange={handleInput}
          defaultValue={vaclav.kolenoOffset}
        />
        <button onClick={handleButton}>
          Update vaclav
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Back Home</p>
      </Link>
    </>
  );
}
