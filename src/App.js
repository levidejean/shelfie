import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
//import noImg from './noImage.png';

//import Dashboard from './component/Dashboard/Dashboard';
//import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
        // inventory: [],
        // currentProduct: null
    }

  }

  getProducts() {
    axios.get( '/api/inventory' )
      .then( response => {
        this.setState({ inventory: response.data })
        console.log( 'response: ', response )
      })
      .catch( response => {
        console.log('getProducts failed on front end: ', response);
      } );
  }

  
  render() {
    // console.log( 'currentProduct: ', this.state.currentProduct );
    return (
      <HashRouter>
      <div className="App">
        <Header />
        
        {/* <Dashboard 
          inventory={this.state.inventory} 
          getProducts={this.getProducts}
          handleClickEdit={this.handleClickEdit}
        />
        <Form 
          getProducts={this.getProducts}
          currentProduct={this.state.currentProduct}
        /> */}

      {routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;

/* 
*/
