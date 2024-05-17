import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./views/EditorPage";
import SignupPage from "./views/SignupPage";
import SigninPage from "./views/SigninPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
