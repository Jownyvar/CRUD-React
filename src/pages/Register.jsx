import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, googleAuth } from "../lib/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const registerGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card">
        <form action="">
          <p>Register Now</p>
          <input
            type="text"
            id="email"
            placeholder="john.doe@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="Password"
            id="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={register}>Register</button>
          <hr />
          <p>or register with</p>
        </form>
        <button onClick={registerGoogle}>Google</button>
      </div>
    </>
  );
};

export default Register;
