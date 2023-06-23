import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
