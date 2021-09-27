import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Movies from "./Components/Movie";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    <Switch>
      <Route exact path="/">
      <SearchBar />
      </Route>

      <Route path="/movies">
      <Movies />
      </Route>

    </Switch> 
    </div>
    </Router>
  );
}

export default App;
