import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); // Allow calls of all origins

app.get("/", async (req: Request, res: Response) => {});

app.listen(4000, () => {
  console.log("Server up!");
});
