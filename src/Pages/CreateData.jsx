import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateData = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [charLocation, setCharLocation] = useState("");
  const [image, setImage] = useState("");

  const API_URL = "http://localhost:3000";

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const character = { name, type, charLocation, image };

    if (!name || !type || !charLocation || !image) {
      alert("All data must be analyzed");
    } else {
      axios
        .post(`${API_URL}/characters`, character)
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    }
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <p>
          <label>Character Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Type : </label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          ></input>
        </p>
        <p>
          <label htmlFor="Data_Rep">Character Location: </label>
          <input
            type="text"
            name="charLocation"
            value={charLocation}
            onChange={(e) => {
              setCharLocation(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Image Url: </label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </p>
        <button type="submit">Add a new character</button>
      </form>
    </>
  );
};

export default CreateData;
