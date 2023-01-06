const express = require("express");
const app =express();
const PORT = 3001;

const userRoute = require("./routes/User");
const commentsRoute = require("./routes/Comments");
app.use("/user", userRoute);
app.use("/comments", commentsRoute);

app.listen(PORT, () => {
    console.log("Server running");
});