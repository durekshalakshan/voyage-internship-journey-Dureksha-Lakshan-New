import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./index.css"; 

export default function App() {
  return (
    <>
      <Nav />
      <div style={{ padding: "24px", maxWidth: 1000, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* portfolio list */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* dynamic route for project details */}
          <Route path="/portfolio/:id" element={<ProjectDetail />} />

          <Route path="/contact" element={<Contact />} />

          {/* fallback 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
