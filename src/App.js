import "./App.css";
import HomePg from "./pageContainer/homePg/HomePg";
import { Routes, Route } from "react-router-dom";
import ProductPg from "./pageContainer/productPg/ProductPg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/productPg" element={<ProductPg />} />
      </Routes>
    </div>
  );
}

export default App;
