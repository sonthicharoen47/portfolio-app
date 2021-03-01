import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/about" component={AboutPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
