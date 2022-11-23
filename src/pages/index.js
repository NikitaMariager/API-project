import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/nav";
import Home from "./Home";

const index = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/Home" element={Home}></Route>
      </Routes>
    </Router>
  );
};
export default index;
