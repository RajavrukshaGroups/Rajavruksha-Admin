import React from "react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('isLoggedIn'); // Clear the login state
      alert('You have been logged out successfully!');
      navigate('/login'); // Redirect to the login page
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center text-lg font-bold border-b border-gray-700">
          Admin Dashboard
        </div>
        {/* <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4"
            >
                Logout
            </button> */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {/* <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Dashboard
              </a>
            </li> */}
            {/* <li>
              <a href="/projects" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Projects
              </a>
            </li> */}
            <li>
              <a href="/careers" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Career
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 text-center"> BDE Submitted count</h2>
            <p className="mt-2 text-gray-600 text-center font-bold text-4xl">15</p>
          </div>
          {/* Box 1 */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 text-center">BDE Intern Submitted count</h2>
            <p className="mt-2 text-gray-600 text-center font-bold text-4xl">10</p>
          </div>
          {/* Box 2 */}
          {/* <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Box 2</h2>
            <p className="mt-2 text-gray-600">Details about Box 2.</p>
          </div> */}
          {/* Box 3 */}
         
        </div>
       <div className="p-6">
       <button onClick={handleLogout} className="w-28 ">
          Logout
        </button>
       </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

