import NavBar from "./Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./home";
import Contact from "./Contact";
import About from "./About";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>

  );
}

export default App;
