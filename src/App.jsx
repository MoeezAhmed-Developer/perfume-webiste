import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Perfumes";
import CollectionsPage from "./pages/Collections";
import AboutPage from "./pages/About";
import OrderPage from "./pages/order";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfumes" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
