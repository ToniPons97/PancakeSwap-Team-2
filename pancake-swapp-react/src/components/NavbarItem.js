import { Link } from "react-router-dom";

const NavbarItem = ({ itemName, links }) => {
    return (
        <li className="item">
            <Link to={'/' + links[0]}>{itemName}</Link>
            <div className="submenu1">
                <ul>
                    {
                        links.map(el => (
                            <li key={crypto.randomUUID()}>
                                <Link to={'/' + el}>
                                    {el}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    );
}

export default NavbarItem;