import "./App.css";
import GetStarted from "./components/pages/GetStarted";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/dashboard";
import Tickets from "./components/pages/Tickets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth/signup" element={<GetStarted />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Tickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
