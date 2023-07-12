import {LOGO_IMG} from "../utils/constants"

const Header = () => (
    <div className="header">
        <img className="logo" src={LOGO_IMG} />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;