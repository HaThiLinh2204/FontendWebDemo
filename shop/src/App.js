import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/header.tsx";
import Login from "./pages/Auth/Login/Login.tsx";
import Register from "./pages/Auth/Register/Register.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Giay from "./pages/PageSanPham/ListGiay/index";
import Tui from "./pages/PageSanPham/ListTui/index";
import PhuKien from "./pages/PageSanPham/ListPhuKien/index";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/giay" element={<Giay />}/>
          <Route path="/tui" element={<Tui/>}/>
          <Route path="/phukien" element={<PhuKien />}/>
        </Routes>
        <Footer />
      </Router>
    </div>

    // <RegisterPage />
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
