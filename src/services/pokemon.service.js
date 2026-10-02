import { ref, push } from "firebase/database";
import { db } from "../lib/firebase";
const pokemonRef = ref(db, '/Pokemon')

export const addPokemon = async (name, type) => {
    try {
        const newPoke = await push(pokemonRef, { name, type })
        console.log("pokemon added.", newPoke.key);
    } catch (error) {
        console.log(error);
    }
}


export const getPokemon = () => {
    try {

    } catch (error) {
        console.log(error);
    }
}

export const updatePokemon = () => {
    try {

    } catch (error) {
        console.log(error);
    }
}

export const deletePokemon = () => {
    try {

    } catch (error) {
        console.log(error);
    }
}