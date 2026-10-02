import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

const Home = () => {
  const logOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>This is a home page</div>
      <form action="">
        <label htmlFor="pokemon">Pokemon Name</label>
        <br />
        <input type="text" id="pokemon" />
        <br />
        <label htmlFor="type">Pokemon Type</label>
        <br />
        <input type="text" id="type" />
        <br />
        <button>Add to pokedex</button>
      </form>
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default Home;
