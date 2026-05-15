import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import MainLayout from "./layout/mainLayout";
import { Students } from "./pages/students";
import { Attendance } from "./pages/attendance";
import { Report } from "./pages/report";
import { Settings } from "./pages/setting";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="reports" element={<Report />} />
          <Route path="setting" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;