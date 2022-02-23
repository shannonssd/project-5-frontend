import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";import { NeighbourhoodProvider } from './components/others/store';
import './App.css';
import NavBar from './components/others/NavBar';
import Home from './components/pages/Home';


export default function App() {
  return (
    <NeighbourhoodProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>  
    </NeighbourhoodProvider>
  );
}
