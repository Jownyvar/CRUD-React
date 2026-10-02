import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./lib/firebase.js";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        navigate('/');
      }else{
        navigate('/Register');
      }
    });
    return unsub;
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<div>THIS IS ABOUT PAGE</div>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/*" element={<div>ERROR 404 PAGE NOT FOUND</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
