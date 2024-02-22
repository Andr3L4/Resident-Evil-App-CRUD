/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateData = () => {
  const [character, setCharacter] = useState({});
  const [field, setField] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [weapon1, setWeapon1] = useState("");
  const [weapon2, setWeapon2] = useState("");

  const { id } = useParams();

  const redirect = useNavigate();

  useEffect(() => {
    axios
      .get(`https://resident-evil-app-backend.onrender.com/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setName(res.data.name);
        setType(res.data.type);
        setImage(res.data.image);
        setLocation(res.data.location);
        setWeapon1(res.data.weapon[0]);
        setWeapon2(res.data.weapon[1]);
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

    const data = { name, type, image, location, weapons:[weapon1, weapon2] };

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

<label>Character Image </label>
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <label>Location </label>
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
<label>Weapon 1 </label>
        <input
          type="text"
          value={weapon1}
          onChange={(e) => {
            setWeapon1(e.target.value);
          }}
        />

<label>Weapon 2</label>
        <input
          type="text"
          value={weapon2}
          onChange={(e) => {
            setWeapon2(e.target.value);
          }}
        />
        {/*<label>Character Location </label>
        <textarea
          id="DataDoc"
          cols="30"
          rows="5"
          value={charLocation}
          onChange={(e) => {
            setCharLocation(e.target.value);
          }}
        ></textarea>*/}

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
