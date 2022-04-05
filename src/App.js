import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePg from "./pageContainer/homePg/HomePg";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/productPg" element={<HomePg />} />
        <Route path="/cartPg" element={<HomePg />} />
        <Route path="/wishlistPg" element={<HomePg />} />
        <Route path="/loginPg" element={<HomePg />}/>
      </Routes>
    </div>
  );
}

export default App;
