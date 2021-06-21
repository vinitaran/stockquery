import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
