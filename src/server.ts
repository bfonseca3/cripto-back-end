import express from "express";
import cors from "cors";
import { router } from "./router";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json({ limit: "500mb" }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port ${port}`)
);

async function addNewHistory() {
  const { status } = await axios.get(`${process.env.URL_BACKEND}/new/history`, {
    params: { key: process.env.KEY },
  });

  if (status == 200) {
    return;
  } else {
    console.log("Erro ao atualizar historico");
  }
}

// addNewHistory();

//  setInterval(() => {
//   addNewHistory();
//   console.log("chamou");
//  }, 3600000);

// app.get("/cadastrar", async (request: Request, response: Response) => {
//   console.log("entrou");

//   const { data: coins } = await axios.get(
//     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
//     {
//       params: { start: "1", limit: "5000" },
//       headers: { "X-CMC_PRO_API_KEY": "a14883c2-de04-4374-8307-0ad9be296966" },
//     }
//   );

//   await axios.post("http://localhost:8000/register/coin", {
//     data: coins.data,
//   });

//   response.send();
// });
