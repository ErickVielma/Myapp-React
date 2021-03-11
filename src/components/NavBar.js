import { Component } from 'react';
import logo from '../logo.svg';
import './NavBar.css';
import CartWidget from './CartWidget';

class NavBar extends Component {
  render() {
  return (
    <>
    <div class="topnav">
    <img src={logo} className="App-logo" alt="logo" align="left"/>
    <a class="active" href="#home">Categorias</a>
    <a href="#news">Ofertas</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#usuario">Usuario: {this.props.name}{this.props.lastname}</a>
    
    </div>
    
    <CartWidget />
    
    </>
  );
}
}
export default NavBar;
