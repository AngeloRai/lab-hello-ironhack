import logo from "./images/ironhack-logo.svg";
import topMenu from "./images/menu-top.svg";

function Nav () {
    return (
        <header className="header">
        <img src={logo} />
        <img src={topMenu}></img>
      </header>
    )
}

export default Nav;