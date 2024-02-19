import "./stylesheets/App.scss";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Menu from "./components/Menu";
import DashboardPage from "./components/Dashboard/DashboardPage";
import FileUploadPage from "./components/FileUploadPage";
import PeerPage from "./components/PeerPage";
import SettingPage from "./components/SettingPage";

function LocationProvider({ children }: { children: React.ReactNode }) {
  console.log(children);
  return <AnimatePresence>{children}</AnimatePresence>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/file-upload" element={<FileUploadPage />} />
      <Route path="/peer" element={<PeerPage />} />
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <LocationProvider>
          <AnimatedRoutes />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
