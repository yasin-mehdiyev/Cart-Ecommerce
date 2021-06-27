import React from 'react'
import ProductContextProvider from './store/ProductContextProvider'
import SearchbarContextProvider from './store/SearchbarContextProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Bucket/Cart'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Layout/Home';

const App = () => {
  return (
    <Router>
      <ProductContextProvider>
        <SearchbarContextProvider>
            <Switch>
                <Route path="/" exact component={Home} />
                <div className="container">
                    <Route path="/cart" component={Cart} />
                </div>
            </Switch>
        </SearchbarContextProvider>
      </ProductContextProvider>
    </Router>
  )
}

export default App

