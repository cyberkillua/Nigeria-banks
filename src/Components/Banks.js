import React, { useEffect, useState } from "react";

const Banks = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://nigerianbanks.xyz")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <main className="main-banks">
      <section className="main-banks-grid">
        {data
          ? data
              .filter((item) => {
                if (props.search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(props.search.toLowerCase())
                ) {
                  return item;
                }
                
              })
              .map((item) => (
                <div className="bank" key={item.code}>
                  <img src={item.logo} alt="bank logo" className="bank-logo" />
                  <p className="bank-name">{item.name}</p>
                  <p className="bankussd">{item.ussd}</p>
                </div>
              ))
          : "loading..."}
      </section>
    </main>
  );
};

export default Banks;
