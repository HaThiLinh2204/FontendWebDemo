import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
//import RegisterPage from "./RegisterAccount/RegisterAccount";

import Header from './components/Header/header';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>

    // <RegisterPage />
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
