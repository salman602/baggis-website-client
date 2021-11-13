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
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <PrivateRoute path="/product/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/explore">
              <Explore />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
