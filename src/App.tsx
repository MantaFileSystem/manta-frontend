import "./stylesheets/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardPage from "./components/DashBoardPage";
import FileUploadPage from "./components/FileUploadPage";
import PeerPage from "./components/PeerPage";
import SettingPage from "./components/SettingPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/file-upload" element={<FileUploadPage />} />
        <Route path="/peer" element={<PeerPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
