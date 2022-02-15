import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.use(express.static(path.resolve("src/client")));
app.use(express.static(path.resolve("dist/client")));

app.listen(port, () => {
    console.log(`Server started listening on http://localhost:${port}`);
});
