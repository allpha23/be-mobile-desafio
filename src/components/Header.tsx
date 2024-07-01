import logo from '../assets/logo.svg'
import '../styles/components/Header.css'

const Header = () => {
  return (
    <nav className="nav-container">
      <a className="logo" href="/">
        <img src={logo} alt="" />
      </a>
    </nav>
  );
}

export default Header;
