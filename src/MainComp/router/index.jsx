import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/homePage";
import ProjectsPage from "../ProjectsPage/projectsPage";
import CareersPage from "../CareersPage/careersPage";
import Login from "../../Component/Login/login";
const AllRoute = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </Router>
  );
};

export default AllRoute;
