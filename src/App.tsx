import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./pages/onboarding/Welcome";
import Login from "./pages/onboarding/Login";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SendPage from "./pages/Dashboard/SendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route index element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/send" element={<SendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
