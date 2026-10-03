import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { addPokemon, getPokemon } from "../services/pokemon.service";
import { useState, useEffect, Fragment } from "react";
import Card from "../components/card";
import "../components/card.css";
import { deletePokemon } from "../services/pokemon.service";
import { updatePokemon } from "../services/pokemon.service";

const Home = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeType, setPokeType] = useState("");
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon((data) => {
      setPokemon(data);
    });
  }, []);
  const logOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const newPokemon = async (name, type) => {
    try {
      await addPokemon(name, type);
    } catch (error) {
      console.log(error);
    }
  };

  if (!pokemon) {
    return (
      <>
        <p>Loading.</p>
      </>
    );
  }
  return (
    <>
      <div>This is a home page</div>
      <form action="">
        <label htmlFor="pokemon">Pokemon Name</label>
        <br />
        <input
          type="text"
          id="pokemon"
          onChange={(e) => setPokeName(e.target.value)}
        />
        <br />
        <label htmlFor="type">Pokemon Type</label>
        <br />
        <input
          type="text"
          id="type"
          onChange={(e) => setPokeType(e.target.value)}
        />
        <br />
        <button type="button" onClick={() => newPokemon(pokeName, pokeType)}>
          Add to pokedex
        </button>
      </form>
      <button onClick={logOut}>Log Out</button>

      <h2>Pokémon List</h2>

      <div
        className="container"
        style={{ display: "flex", flexDirection: "row", gap: "15px" }}
      >
        {pokemon.map((poke) => (
          <Fragment key={poke.id}>
            <div className="outer-card">
              <div className="inner-card">
                <div className="top-inner-card">
                  <p>{poke.name}</p>
                  <p>{poke.type}</p>
                </div>
                <div className="bottom-inner-card"></div>
                <button
                  className="edit-btn"
                  onClick={() => {
                    updatePokemon(poke.id, pokeName, pokeType);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deletePokemon(poke.id);
                  }}
                  className="del-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <button onClick={logOut} style={{ margin: "20px 0px" }}>
        Log Out
      </button>
    </>
  );
};

export default Home;
