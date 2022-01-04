import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Citation : {user.quote}{" "}
            <div className="title"> Personnage : {user.character}</div>
            <div className="image-container">
              <img src={user.image} alt="image" className="image" />
            </div>
            <button className="button" onClick={getApiData}>
              Clicker moi
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
