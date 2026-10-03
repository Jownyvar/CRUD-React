import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { addPokemon, getPokemon } from "../services/pokemon.service";
import { useState, useEffect } from "react";
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

  if(!pokemon){
    return <><p>Loading.</p></>
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

      <ul>
        {pokemon.map((poke) => (
          <li key={poke.id}>
            {poke.name} - {poke.type}
          </li>
        ))}
      </ul>

      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default Home;
