import { ref, push, orderByChild, remove, update } from "firebase/database";
import { db } from "../lib/firebase";
import { query } from "firebase/database";
import { equalTo } from "firebase/database";
import { onValue } from "firebase/database";
import { get } from "firebase/database";

const pokemonRef = ref(db, '/Pokemon')

export const addPokemon = async (name, type) => {
    try {
        if (!(await isPokemonExisting(name))) {
            await push(pokemonRef, { name, type })
            console.log("Pokemon added successfully");
            return;
        }

        console.log("Pokemon already existing");
    } catch (error) {
        console.log(error);
    }
}

const isPokemonExisting = async (pokeName) => {
    try {
        const pokemonQuery = query(
            pokemonRef,
            orderByChild("name"),
            equalTo(pokeName)
        );

        const snapshot = await get(pokemonQuery);

        return snapshot.exists();

    } catch (error) {
        console.log(error);
        return false;
    }
};


export const getPokemon = (callback) => {
    onValue(pokemonRef, (snapshot) => {
        const pokemonArray = [];

        snapshot.forEach((snap) => {
            const pokemonData = snap.val();

            pokemonArray.push({
                id: snap.key,
                ...pokemonData
            });
        });

        callback(pokemonArray);
    });
};

export const updatePokemon = async (id, name, type) => {
    try {
        const pokemonUpdateRef = ref(db, `Pokemon/${id}`);
        const updatePokemon = await update(pokemonUpdateRef, {name, type});
        return updatePokemon;
    } catch (error) {
        console.log(error);
    }
}

export const deletePokemon = async (id) => {
    try {
        const pokemonUpdateRef = ref(db, `Pokemon/${id}`)
        const deletedPokemon = await remove(pokemonUpdateRef, id);
        return deletedPokemon;
    } catch (error) {
        console.log(error);
    }
}


