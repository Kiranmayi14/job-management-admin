const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Middleware for JSON parsing

// PostgreSQL database connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "job_admin",
    password: "Kiran@14*",
    port: 5432, // Default PostgreSQL port
});

// API endpoint to fetch job listings
app.get("api/jobs", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM jobs");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Start the server
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
