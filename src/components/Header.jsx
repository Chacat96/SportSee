import logo from '../assets/logo/logo.png';
import '../styles/css/Header.css';

function Header () {
    return (
        <header className="header">
            <img src={logo} alt="logo" className='header__logo'/>
            <nav className='header__nav'>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;