import express from "express"

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

app.get("/", (request, response) => {
    response.send("Hello world!");
})