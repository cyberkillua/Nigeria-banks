import { useState } from "react";
import Banks from "./Components/Banks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Header data={data} setData={setData}/>
      <Banks data={data} setData={setData}/>
      <Footer />
    </div>
  );
}

export default App;
