import { useState, useEffect } from "react";

const JobListPage = () => {
  const [jobs, setJobs] = useState([]); // Ensure jobs is an array
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/jobs") // This calls your backend API
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging
        setJobs(Array.isArray(data) ? data : []); // Ensure jobs is always an array
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs");
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Job Listings</h1>
      {error ? <p className="text-red-500">{error}</p> : null}
      <div className="grid grid-cols-3 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="border p-4 shadow-lg rounded-md">
              <h2 className="text-lg font-semibold">{job.title}</h2>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default JobListPage;






