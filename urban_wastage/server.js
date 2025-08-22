const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;  // ✅ use Render's dynamic port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
