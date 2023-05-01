import Update from "../../images/svg/update.svg";
import Users from "../../images/svg/newCustomers.svg";
import Hamburger from "../../images/svg/menu.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="burger">
        <img className="burger-img" src={Hamburger} alt="icon" />
      </div>
      <p>Title</p>
      <div className="icons">
        <img className="chevron" src={Update} alt="icon" />
        <img className="user" src={Users} alt="icon" />
      </div>
    </header>
  );
}

export default Header;