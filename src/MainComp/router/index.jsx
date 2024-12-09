import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHomePage from "../HomePage/homePage";
import MainProjectsPage from "../ProjectsPage/projectsPage";
import MainCareersPage from "../CareersPage/careersPage";
const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainHomePage />} />
          <Route path="/projects" element={<MainProjectsPage />} />
          <Route path="/careers" element={<MainCareersPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
