import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
import Airlines from './pages/airlines'
import Airports from './pages/airports'
import Reviews from './pages/reviews'
import about from './pages/about'
import Navbar from './components/Navbar';
import { FooterContainer } from './components/footer';
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
          <Route path='/reviews' component={Reviews} />
          <Route path='/about' component={about} />
        </Switch>
        </div>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
