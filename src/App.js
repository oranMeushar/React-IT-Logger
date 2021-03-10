import React from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import ItLoggerState from './context/IT-Logger/IT-LoggerState';
import {Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
const App = ()=> {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'>
            <ItLoggerState>
              <Home/>
            </ItLoggerState>
          </Route>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Layout>   
    </div>
  );
}

export default App;
