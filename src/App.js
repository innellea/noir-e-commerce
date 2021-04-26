// Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";
// Styles
import "./App.css";
// Components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from './components/header/header.component'
//

const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
