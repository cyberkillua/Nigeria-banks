import React, { useEffect, useState } from "react";

const Banks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://nigerianbanks.xyz")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);
  return (
    <main className="main-banks">
      <section className="main-banks-grid">
        {data.map((item) => (
          <div className="bank" key={item.code}>
            <img src={item.logo} alt="bank logo" className="bank-logo" />
            <p className="bank-name">{item.name}</p>
            <p className="bankussd">{item.ussd}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Banks;
