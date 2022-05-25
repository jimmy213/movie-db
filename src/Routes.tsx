import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import { Home } from "./pages/home";
import { MovieDetailsModal } from "./components/MovieDetailsModal";

export default function AppRoutes() {
  return (
    <Router>
      <PageHeader />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <MovieDetailsModal />
    </Router>
  );
}
