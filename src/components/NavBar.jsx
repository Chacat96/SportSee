import haltere from '../assets/icon/haltere.png';
import natation from '../assets/icon/natation.png';
import velo from '../assets/icon/velo.png';
import yoga from '../assets/icon/yoga.png';
import '../styles/css/NavBar.css';

function NavBar () {
    return (
        <nav className="navBar">
            <div className="navBar__icon">
                <img src={yoga} alt="icon yoga" />
                <img src={natation} alt="icon natation" />
                <img src={velo} alt="icon vélo" />
                <img src={haltere} alt="icon haltère" />
            </div>
            <p className='navBar__copyright'>Copyright, SportSee 2020</p>
        </nav>
    )
}

export default NavBar;