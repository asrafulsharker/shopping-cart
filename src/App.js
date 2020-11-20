import { Component } from 'react';
import './App.css';
import data from "./data.json"; 
class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size: "",
      sort:""
    }
  }
  render(){
    return (
      <div className="grid-container">
     <header>
       <a href="/" >React Shopping Cart</a>
     </header>
     <main>
      <div className="content">
        <div className="main">
Products
        </div>
        <div className="sidebar">Cart Items</div>
      </div>
     </main>
     <footer>
       All right is reserved.2020
     </footer>
      </div>
    );
  }
  }



export default App;
