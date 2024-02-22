import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://resident-evil-app-backend.onrender.com";

const ShowData = () => {
  const [characters, setCharacters] = useState([]);

  const getData = () => {
    axios.get(`${API_URL}/characters`).then((response) => {
      setCharacters(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/characters/${id}`).then(() => {
      getData();
    });
  };
  return (
    <div>
      <Link to={"/createData"}>Add More Characters</Link>
      <h1>Data Selection</h1>
      <table>
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Character Type</th>
            <th>Character Image</th>
            <th>Character Location</th>
            <th>Character Weapon 1</th>
            <th>Character Weapon 2</th>
            {/*                         <th>Character Details</th> */}
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {characters &&
            characters.map((character) => {
              return (
                <tr key={character.id}>
                  <td>{character.name}</td>
                  <td>{character.type}</td>
                  <td>
                    <img src={character.image} alt="img" width={"150px"} />
                  </td>
                  <td>{character.location}</td>
                  <td>
                    {character.weapons && character.weapons.length > 0 ? character.weapons[0] : "-"}
                  </td>
                  <td>
                    {character.weapons && character.weapons.length > 1 ? character.weapons[1] : "-"}
                  </td>

                  {/*                                <td> <Link to={`/characters/${id}`}> View more details </Link></td> */}
                  <td>
                    <Link to={`/updateData/${character.id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(character.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
