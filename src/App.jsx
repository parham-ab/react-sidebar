import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import AboutUs from './pages/AboutUs';
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Sidebar>
  );
};
export default App;
