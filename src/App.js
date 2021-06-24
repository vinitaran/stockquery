import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Index from './Components/pages/Index';
import ShortTS from './Components/pages/ShortTS';
import LongTS from './Components/pages/LongTS';
import exchangeTS from './Components/pages/exchangeTS';
import IpoTS from './Components/pages/IpoTS';
import Pricing from './Components/Pricing/Pricing';
import Signup from './Components/pages/Signup';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/index-watch">
            <Index />
          </Route>
          <Route path="/short-term">
            <ShortTS />
          </Route>
          <Route path="/long-term" component={LongTS} />
          <Route path="/etf" component={exchangeTS} />
          <Route path="/online-ipo" component={IpoTS} />
          <Route path="/plans" component={Pricing} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
