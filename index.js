const express = require("express");

const app = express();
import getToDoList from "./list";

const list = getToDoList();

app.get('/', (req, res) => {
  return res.status(200).send({
    success: true,
    list,
  });
})

app.post('/', )

const PORT = process.env.PORT || 4000;
const HOSTNAME = "127.0.0.1";

app.listen(PORT, () => console.log(`Server running at http://${HOSTNAME}:${PORT}/`));