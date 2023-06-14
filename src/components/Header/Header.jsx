const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <a className="header__logo-link" href="#">
              <img className="header__logo" src="images/logo.svg" alt="logo" />
            </a>
            <div className="header__left-text">
              <h1 className="header__title">REACT SNEAKERS</h1>
              <h6 className="header__subtitle">Магазин лучших кроссовок</h6>
            </div>
          </div>

          <div className="header__right">
            <div className="user-nav">
              <div className="user-nav__item">
                <button className="user-nav__btn">
                  <img
                    className="user-nav__icon"
                    src="images/icons/bag.svg"
                    alt="icon-bag"
                  />
                </button>
                <span className="user-nav__sum">1205 руб.</span>
              </div>
              <div className="user-nav__item">
                <a className="user-nav__link" href="#">
                  <img src="images/icons/heart.svg" alt="icon-favorites" />
                </a>
              </div>
              <div className="user-nav__item">
                <a className="user-nav__link" href="#">
                  <img src="images/icons/profile.svg" alt="icon-user" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
