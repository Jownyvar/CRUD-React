import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../lib/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
          <button onClick={signIn}>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
