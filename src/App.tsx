import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Signup from "./components/signup";
import Login from "./components/login";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import AuctionDetails from "./components/auction-details";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auction-details/:id" element={<AuctionDetails />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
