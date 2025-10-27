import express from "express";
import { connectCassandra } from "./cassandraClient";
import router from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

connectCassandra().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
