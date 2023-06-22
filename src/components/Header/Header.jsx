import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
        <NavLink path="">
            <div className="header__left">
              <span className="header__logo-link">
                <img className="header__logo" src="images/logo.svg" alt="logo" />
              </span>
              <div className="header__left-text">
                <h1 className="header__title">REACT SNEAKERS</h1>
                <h6 className="header__subtitle">Магазин лучших кроссовок</h6>
              </div>
            </div>
          </NavLink>

          <div className="header__right">
            <div className="user-nav">
              <div className="user-nav__item">
                <button className="user-nav__btn" onClick={props.onClick}>
                  <img
                    className="user-nav__icon"
                    src="images/icons/bag.svg"
                    alt="icon-bag"
                  />
                  {props.quany > 0 && <span className="user-nav__bag-quany">{props.quany}</span>}
                </button>
                <span className="user-nav__sum">1205 руб.</span>
              </div>
              <div className="user-nav__item">
                <NavLink to="/favorites">
                  <img src="images/icons/heart.svg" alt="icon-favorites" />
                </NavLink>
              </div>
              <div className="user-nav__item">
                <NavLink className="user-nav__link" >
                  <img src="images/icons/profile.svg" alt="icon-user" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
