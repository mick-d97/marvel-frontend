import "./App.css";
import Home from "./containers/Home";
import CharacterId from "./containers/CharacterId";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comics from "./containers/Comics";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/comics">
          <Comics />
        </Route>
        <Route path="/comics/:id">
          <CharacterId />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
