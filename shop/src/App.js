import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/header";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>

    // <RegisterPage />
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
