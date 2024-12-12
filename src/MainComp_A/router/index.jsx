import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/homePage";
import ProjectsPage from "../ProjectsPage/projectsPage";
import CareersPage from "../CareersPage/careersPage";
import Login from "../../Component/Login/login";
import CareerDetails from "../../Component/CareerDetails/careerDetails";
import CareerIndDetailPage from "../../Component/CareerDetails/careerIndDetails";
import CareerEditForm from "../../Component/CareersPage/careerEditForm";
import Logout from "../../Component/Logout/logout";
const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareerDetails />} />
        <Route path="/career-form" element={<CareersPage />} />
        <Route path="/career-details/:id" element={<CareerIndDetailPage />} />
        <Route path="/career-edit/:id" element={<CareerEditForm />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
