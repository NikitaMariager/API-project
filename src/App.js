import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import Home from "./pages/Home";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Users from "./pages/JSONplaceholder/users";
import Starwars from "./pages/Starwars";
import "./App.scss";
import StarwarsPages from "./pages/Starwars-pages";
import Species from "./pages/Species";

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<Users />}></Route>
          <Route path="/starwars" element={<Starwars />}></Route>
          <Route path="/starwars-pages" element={<StarwarsPages />}></Route>
          <Route path="/species" element={<Species />}></Route>
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
