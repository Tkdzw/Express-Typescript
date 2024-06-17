import { Router } from "express";
import { AccountController } from "../controllers/account.controller";

const accountRouter = Router();
const accountController = new AccountController();


accountRouter.get("/", accountController.getAllAccounts);
accountRouter.get("/:id", accountController.getAccount);
accountRouter.post("/", accountController.createAccount);
accountRouter.put("/:id", accountController.updateAccount);
accountRouter.delete("/:id", accountController.deleteAccount);

export default accountRouter;