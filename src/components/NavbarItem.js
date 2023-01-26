import { Link } from "react-router-dom";

const NavbarItem = ({ itemName, links }) => {
    return (
        <li className="item">
            <a href="#">{itemName}</a>
            <div className="submenu1">
                <ul>
                    {
                        links.map(el => (
                            <li key={crypto.randomUUID()}>
                                <a  href={'/' + el}>{el}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    );
}

export default NavbarItem;