import express from "express";
import dotenv from "dotenv";
import * as ctr from "./controllers.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

app.get("/test", ctr.getEstudiantes );
app.post("/test", ctr.insertDato);
app.put("/test", ctr.updateDato);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
