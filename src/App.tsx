import "./stylesheets/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./components/DashBoardPage";
import FileUploadPage from "./components/FileUploadPage";
import PeerPage from "./components/PeerPage";
import SettingPage from "./components/SettingPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="grid-container">
      <SideBar />
      {/* <div className="sideBar"></div> */}
      <div className="mainContent"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} />
          <Route path="/peer" element={<PeerPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
