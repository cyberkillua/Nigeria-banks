const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <p>
          nigeria<span className="logo">BanksXYZ</span>
        </p>
      </nav>
      <section className="header-primary">
          <p className="header-primary-text">
               Search for any Nigerian bank USSD 
          </p>
          <div className="header-primary-search">
              <input type="text" placeholder="Bank name" />
          </div>
      </section>
    </header>
  );
};

export default Header;
