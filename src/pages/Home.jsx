import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { addPokemon, getPokemon } from "../services/pokemon.service";
import { useState, useEffect, Fragment } from "react";
import "../components/card.css";
import { deletePokemon } from "../services/pokemon.service";
import { updatePokemon } from "../services/pokemon.service";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Home = () => {
  // const [pokeName, setPokeName] = useState("");
  // const [pokeType, setPokeType] = useState("");
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

  const fieldSchema = z.object({
    name: z.string().min(2, "Cannot be blank"),
    type: z.string().min(2, "Type cannot be blank"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(fieldSchema),
  });

  function submitForm(data) {
    newPokemon(data.name, data.type);
    reset();
  }

  function editPokemon(data, id) {
    updatePokemon(id, data.name, data.type);
    console.log(data);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="pokemon">Pokemon Name</label>
        <br />
        <input type="text" id="pokemon" {...register("name")} />
        {errors && <p style={{ color: "red" }}>{errors?.name?.message}</p>}
        <br />
        <label htmlFor="type">Pokemon Type</label>
        <br />
        <input type="text" id="type" {...register("type")} />
        {errors && <p style={{ color: "red" }}>{errors?.type?.message}</p>}
        <br />
        <button>Add to Pokedex</button>
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
                  onClick={handleSubmit((data) => editPokemon(data, poke.id))}
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
