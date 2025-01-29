import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // Fetch comments from the API
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments?postId=3"
    );
    console.log({ data });
  } catch (e) {
    res.status(500).send({ error: "Something went wrong, try again later!" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
