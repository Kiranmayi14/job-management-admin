import fetch from "node-fetch";
let jobs = [];

export default async function handler(req, res) {
  const API_URL = "http://localhost:3000/api/jobs";

  if (req.method === "GET") {
    const response = await fetch(API_URL);
    const jobs = await response.json();
    res.status(200).json(jobs);
  } 
  else if (req.method === "POST") {
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(req.body) });
    const newJob = await response.json();
    res.status(201).json(newJob);
  } 
  else if (req.method === "PATCH") {
    const { id, ...jobData } = req.body;
    const response = await fetch(`${API_URL}/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(jobData) });
    const updatedJob = await response.json();
    res.status(200).json(updatedJob);
  } 
  else if (req.method === "DELETE") {
    const { id } = req.body;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    res.status(204).end();
  } 
  else {
    res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


  


