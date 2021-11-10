import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <Purchase></Purchase>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
