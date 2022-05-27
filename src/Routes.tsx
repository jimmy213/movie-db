import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import { Home } from "./pages/home";
import { MovieDetailsModal } from "./components/MovieDetailsModal";
import { Movies } from "./pages/movies";
import { Favorites } from "./pages/favorites";

export default function AppRoutes() {
  return (
    <Router>
      <PageHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <MovieDetailsModal />
    </Router>
  );
}
