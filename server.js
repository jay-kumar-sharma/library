const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes"); // ✅ note './'

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes); // ✅ mounts router

app.listen(8080, () => console.log("✅ Server running on port 8080"));
