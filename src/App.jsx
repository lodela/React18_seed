import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNav } from "./Components/AppNav";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";
export const App = () => {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};
