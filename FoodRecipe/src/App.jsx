import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";

export default function App() {
  return (
    <div className="min-h-screen bg-orange-50">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recipe-item/:id"
          element={<Details />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>

    </div>
  );
}