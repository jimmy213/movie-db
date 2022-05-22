import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";

export default function AppRoutes() {
  return (
    <Router>
      <PageHeader />

      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}
