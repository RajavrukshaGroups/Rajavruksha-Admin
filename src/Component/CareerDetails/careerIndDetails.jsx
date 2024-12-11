import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CareerIndDetailPage = () => {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerDetail = async () => {
      try {
        const response = await fetch(`https://adminpanel-backend-ycn7.vercel.app/getIndCareer/${id}`);
        // const response = await fetch(`https://admin-rajavruksha.vercel.app/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch career details");
        }
        const data = await response.json();
        setCareer(data.data);
        console.log("career", data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Full Page Layout */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold mb-6">{career.title}</h2>

        {/* Image Display */}
        {career.image && career.image.url && (
          <img
            src={career.image.url}
            alt={career.title}
            className="w-full h-72 object-cover mb-6"
          />
        )}

        {/* Career Description */}
        <div className="text-lg mb-4">
          <h3 className="font-semibold text-xl">Description</h3>
          <p>{career.description}</p>
        </div>

        {/* Career Location */}
        {career.location && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Location</h3>
            <p>{career.location}</p>
          </div>
        )}

        {/* Career Qualifications */}
        {career.qualifications && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Qualifications</h3>
            <p>{career.qualifications}</p>
          </div>
        )}

        {/* Career Salary */}
        {career.salary && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Salary</h3>
            <p>{career.salary}</p>
          </div>
        )}

        {/* Category */}
        {career.category && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Category</h3>
            <p>{career.category}</p>
          </div>
        )}

        {/* Age Range */}
        {career.age && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Age Range</h3>
            <p>{career.age}</p>
          </div>
        )}

        {/* Experience */}
        {career.experience && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Experience</h3>
            <p>{career.experience}</p>
          </div>
        )}

        {/* Job Type */}
        {career.jobType && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Job Type</h3>
            <p>{career.jobType}</p>
          </div>
        )}

        {/* Skills List */}
        {career.skills && career.skills.length > 0 && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Skills</h3>
            <ul className="list-disc pl-6">
              {career.skills.map((skill, index) => (
                <li key={index} className="text-md">{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Timings */}
        {career.timings && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Timings</h3>
            <p>{career.timings}</p>
          </div>
        )}

        {/* Created At */}
        {career.createdAt && (
          <div className="text-lg mb-4">
            <h3 className="font-semibold text-xl">Posted On</h3>
            <p>{new Date(career.createdAt).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerIndDetailPage;
