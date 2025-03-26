import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";

function App() {

  return (
    <>
      < Router>
        <div className="bg-amber-100 flex flex-col h-screen">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/recipes/:id" exact>
              <Recipe />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
