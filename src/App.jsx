import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
import Airlines from './pages/airlines'
import Airports from './pages/airports'
import reviews from './pages/reviews'
import map from './pages/map'
import about from './pages/about'
import Navbar from './components/Navbar';
import { Switch as Toggle } from '@mui/material';
import {useState} from 'react'

function App() {
  const [bgColor, setBGColor] = useState('white');
  const [isBlack, setIsBlack] = useState(false);

  const handleChangeBG = (e) => {
      setIsBlack(!isBlack);
      setBGColor(isBlack ? 'white' : 'black');
  }

  const sty = {
  color: bgColor
  };

  return (
    <>
    <Router>
      <div className={sty.color==="white" ? "light" : "dark"}>
        <Navbar />
        <Toggle defaultChecked={false} onChange={handleChangeBG} className="toggle" color='default'/>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/home" component={home} />
          <Route path="/airlines" component={Airlines} />
          <Route path='/airports' component={Airports} />
          <Route path='/reviews' component={reviews} />
          <Route path='/map' component={map} />
          <Route path='/about' component={about} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
