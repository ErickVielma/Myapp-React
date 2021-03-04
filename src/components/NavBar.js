import logo from '../logo.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div class="topnav">
    <img src={logo} className="App-logo" alt="logo" align="left"/>
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    </div>
  );
}

export default NavBar;
