import NavBar from "./Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./home";
import './App.css' ; 
import Contact from "./Contact";
import About from "./About";
import Profile  from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>

  );
}

export default App;
