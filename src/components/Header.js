import './Header.css';
import logo from '../assets/korrect_logo.svg';

function Header({ selectedTab, onTabChange }) {
  return (
    <header className="header-wrapper">
        <img src={logo} alt="Korrect 로고" className="w-6 h-6" />
    </header>
  );
}

export default Header;
