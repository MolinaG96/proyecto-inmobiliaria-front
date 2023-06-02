import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { Login } from "./components/Login";
import { SignUp } from "./components/SingUp";

function App() {
  useEffect(() => {
    async function fetchUser() {
      const user = await axios.get(`${settings.axiosURL}/users/me`);
      await dispatch(login(user.data));
    }
    fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
