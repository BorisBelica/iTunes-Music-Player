import React from 'react';
import { Switch, Route, } from 'react-router-dom';


// assetes and styles
import './index.scss';
import logo from '../src/assets/logo.svg'
import itunes from '../src/assets/itunes.png'

//components
import TheNavigation from './components/TheNavigation'

// views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
  return (
    <div className="App">

      <header className="App App-header">
        <TheNavigation />
        <img className="itunes-logo" src={itunes} alt="itunes logo"/>
        <h1 className="main-title">iTunes <span>Music</span> Player</h1>  
      </header>

        <main className="content">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/tunes" component={Tunes}/>
            <Route path="/about" component={About}/>
          </Switch> 
        </main>

        <footer>
          <img className="logo App-logo" src={logo} alt="react logo"/>
          <p>Powered by React</p>
          <p className="sign">Created by <a href="https://boris-belica.sk/">Boris Belica</a>, special thank's to <a href="https://yablko.sk/">Yablko</a> <br/>& Stack Overflow</p>
        </footer>



  
    </div>
  );
}

export default App;
