import logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <header className="page__header header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar__container">
            <a href="#">
              <img src={logo} alt="logo" className="header__logo" />
            </a>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header__main">
          <h1 className="header__title">Denta <span className="header__title--red">Lux</span></h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
