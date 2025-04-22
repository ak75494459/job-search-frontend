import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Job {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  url: string;
  location: string;
}

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`) //
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          console.error("Invalid API response format - Expected an array");
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading jobs...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {jobs.map((job) => (
        <Card key={job.slug} className="shadow-md rounded-lg p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company_name}</p>
            <p className="text-gray-500">{job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2">View Job</Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
