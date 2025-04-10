import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";
import { PageWrapper } from "./components/PageWrapper";

function App() {
  return (
    <Router>
      <div className="bg-amber-100 flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App
