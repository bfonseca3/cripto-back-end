import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(express.json({ limit: "500mb" }));

app.use(router);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port ${port}`)
);

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
