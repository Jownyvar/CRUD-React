import { ref, push, orderByChild } from "firebase/database";
import { db } from "../lib/firebase";
import { query } from "firebase/database";
import { equalTo } from "firebase/database";

const pokemonRef = ref(db, '/Pokemon')

export const addPokemon = async (name, type) => {
    try {
        if (isPokemonExisting(name)) {
            await push(pokemonRef, { name, type })
            console.log("Pokemon added successfully");
            return;
        }
        
        console.log("Pokemon already existing");
    } catch (error) {
        console.log(error);
    }
}

const isPokemonExisting = (pokeName) => {
    try {
        const isExisting = query(pokemonRef, orderByChild("name"), equalTo(pokeName));
        console.log(isExisting);
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