import { Router } from "express";
import { HistoryRegisterController } from "./controller/HistoryRegisterController.ts/HistoryRegisterController";
import { RegisterCoinController } from "./controller/RegisterCoinController/RegisterCoinController";
import { TageCoinsController } from "./controller/TakeCoinsController/TakeCoinsController";
import TakeCoinsFilterController from "./controller/TakeCoinsFilterController/TakeCoinsFilterController";
import { TakeCoinSpecificController } from "./controller/TakeCoinSpecificController/TakeCoinSpecificController";
import UserController from "./controller/UserController/UserController";

const router = Router();

router.post("/register/coin", new RegisterCoinController().handle);

router.get("/coin/take/all", new TageCoinsController().handle);

router.get("/new/history", new HistoryRegisterController().handle);

router.get("/coin/take/:id", new TakeCoinSpecificController().handle);

router.get("/coin/filter/front", new TakeCoinsFilterController().handle);

router.post("/user", new UserController().handle);

export { router };
