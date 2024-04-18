import express, {
  Express,
  Request,
  Response,
} from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import "dotenv/config";

import apiRouter from "./src/routes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(
  express.static(
    path.join(__dirname, "public")
  )
);

app.get("/", (_, res: Response) => {
  res.send(
    "Express + TypeScript Server"
  );
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port}`
  );
});
