import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layouts/main";
import ProductsList from "./components/products/productlist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { Button } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="header">
          <Button>Header</Button>
        </Link>
        <Link to="footer">Footer</Link>
        <Link to="main">Main</Link>

        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/main" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
