
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./pages/onboarding/Welcome";
import Login from "./pages/onboarding/Login";
import Dashboard from "./pages/Dashboard"

function App() {
  return()
    <Router>
      <Routes>
        <Route path="/">
          {" "}
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route index element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );

}

export default App;
