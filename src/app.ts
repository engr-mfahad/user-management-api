import "dotenv/config";
import express, { Express } from "express";
import UserRoutes from "./routes/user.route";

const app: Express = express();

app.use(express.json());
app.use("/users", UserRoutes);

export default app;
