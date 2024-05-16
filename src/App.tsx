import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./views/EditorPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<EditorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
