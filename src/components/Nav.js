import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

const Nav = ({ cart }) => {
  return (
    <nav>
      <h3>Logo goes here</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <span>{cart.length}</span>
        <Icon
          path={mdiCartOutline}
          title="User Profile"
          size={1}
          horizontal
          color="red"
        />
      </ul>
    </nav>
  );
};

export default Nav;
