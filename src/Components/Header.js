const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <p>
          nigeria<span className="logo">BanksXYZ</span>
        </p>
        <div className="navigation-search">
            <input type="text" name="search" placeholder="Search for bank"/>
            <ion-icon name="search-outline" className="icon"></ion-icon>
        </div>
      </nav>
      <section className="header-primary">
          <p className="header-primary-text">
              Generate transfer code
          </p>
          <div className="header-primary-search">
              <input type="text" placeholder="Bank name" />
          </div>
      </section>
    </header>
  );
};

export default Header;
