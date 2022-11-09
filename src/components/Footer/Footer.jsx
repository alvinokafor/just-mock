import './Footer.css';

import zuriLogo from '../../assets/Zuri.svg';
import i4g from '../../assets/I4G.svg';

function Footer() {
    return (
        <footer>
            <img src={zuriLogo} alt='zuri internship logo' />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={i4g} alt='ingerssive for good logo' />
        </footer>
    );
}

export default Footer;