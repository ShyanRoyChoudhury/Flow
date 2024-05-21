import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./views/EditorPage";
import SignupPage from "./views/SignupPage";
import SigninPage from "./views/SigninPage";
import AlertBox from "./components/AlertBox";
import { useRecoilValue } from "recoil";
import { serverState } from "./store/serverState";
import { cn } from "./lib/utils";
import useServerStatus from "./hooks/useServerStatus";


function App() {
  useServerStatus()
  const serverRunning = useRecoilValue(serverState)
  return (
    <div className="">
      <div className={cn(`${!serverRunning ?'bg-opacity-80 bg-[#000f0a] z-10':''} fixed top-0 left-0 w-full h-full flex justify-center items-center`)}>
                 {!serverRunning && <AlertBox/> }
      </div>
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
