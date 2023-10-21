import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/onboarding/Welcome";
import Login from "./pages/onboarding/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {" "}
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route index element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
