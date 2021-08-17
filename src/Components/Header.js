const Header = (props) => {
  const setBank = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <p>
          nigeria<span className="logo">BanksXYZ</span>
        </p>
      </nav>
      <section className="header-primary">
        <p className="header-primary-text">Search for Bank</p>
        <div className="header-primary-search">
          <input
            type="text"
            name="search"
            placeholder="Search for bank"
            onChange={setBank}
          />
          <ion-icon name="search-outline" className="icon"></ion-icon>
        </div>
      </section>
    </header>
  );
};

export default Header;
