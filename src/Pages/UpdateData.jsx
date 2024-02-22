/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateData = () => {
  const [character, setCharacter] = useState({});
  const [field, setField] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [charLocation, setCharLocation] = useState("");

  const { id } = useParams();

  const redirect = useNavigate();

  useEffect(() => {
    axios
      .get(`https://resident-evil-app-backend.onrender.com/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setName(res.data.name);
        setType(res.data.type);
        /*         setCharLocation(res.data.location); */
      })

      .catch((error) => console.log(error));
  }, [id]);

  /* 
    const handleData = (e) =>
    {
        setDataInformation({ ...DataInformation, [e.target.name]: e.target.value })
        console.log(DataInformation)
    } */

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, type /* , location  */ };

    axios
      .put(`https://resident-evil-app-backend.onrender.com/characters/${id}`, data)
      .then(
        /* (res) => setProductData(res.data) */ () => {
          setField(true);
          redirect("/");
        }
      )

      .catch((error) => console.log(error));
  };

  return (
    <>
      <pre>
        {field ? (
          <h2>{/* New {inputData.DataId},  */}Data Added successfully!</h2>
        ) : (
          ""
        )}
      </pre>
      <form onSubmit={handleSubmit}>
        <label>Character Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Character Type </label>
        <input
          type="text"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />

        <label>Character Location </label>
        <textarea
          id="DataDoc"
          cols="30"
          rows="5"
          value={charLocation}
          onChange={(e) => {
            setCharLocation(e.target.value);
          }}
        ></textarea>

        {/*                 <p>
                    <label>Character Image Url: </label>
                    <input type="text" value={character.image} onChange={handleData} />
                </p> */}
        <button type="submit">Edit Character</button>
      </form>
    </>
  );
};

export default UpdateData;
