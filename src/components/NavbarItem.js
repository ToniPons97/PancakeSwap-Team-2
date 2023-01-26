import { Link } from "react-router-dom";

const NavbarItem = ({ itemName, links }) => {
    return (
        <li className="item">
            <a href="#">{itemName}</a>
            <div className="submenu1">
                <ul>
                    {
                        links.map(el => (
                            <li >
                                <Link key={crypto.randomUUID()} to={'/' + el}>
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