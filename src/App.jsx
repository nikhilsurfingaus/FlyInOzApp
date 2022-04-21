import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
import airlines from './pages/airlines'
import airports from './pages/airports'
import reviews from './pages/reviews'
import map from './pages/map'
import about from './pages/about'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/home" component={home} />
          <Route path="/airlines" component={airlines} />
          <Route path='/airports' component={airports} />
          <Route path='/reviews' component={reviews} />
          <Route path='/map' component={map} />
          <Route path='/about' component={about} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
