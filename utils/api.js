export async function getJobs() {
    const res = await fetch("/api/jobs");
    return res.json();
  }
  