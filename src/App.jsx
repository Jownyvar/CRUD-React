import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Routes element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<div>THIS IS ABOUT PAGE</div>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<div>ERROR 404 PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
}

export default App;
