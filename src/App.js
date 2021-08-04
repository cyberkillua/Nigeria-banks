import { useState } from "react";
import Banks from "./Components/Banks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Banks search={search} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default App;
