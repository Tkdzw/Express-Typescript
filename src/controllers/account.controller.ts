import { Request, Response } from "express";
import { AccountService } from "../services/Account/account.service";
import { IAccountService } from "../services/Account/IAccountService";

export class AccountController{
    private accountService : IAccountService;

    constructor(){
        this.accountService = new AccountService();
    }

    public getAllAccounts = async (req: Request, res: Response): Promise<Response> =>{
        const response = await this.accountService.getAllAccounts();
        return res.json(response);
    }

    public getAccount = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.accountService.getAccount(Number(req.params.id));
        return res.json(account);
    };

    public createAccount = async (req: Request, res: Response): Promise<Response> => {
        const newAccount = await this.accountService.createAccount(req.body);
        return res.status(201).json(newAccount);
    };

    public updateAccount = async (req: Request, res: Response): Promise<Response> => {
        const updatedAccount = await this.accountService.updateAccount(Number(req.params.id), req.body);
        return res.json(updatedAccount);
    };

    public deleteAccount = async (req: Request, res: Response): Promise<Response> => {
        await this.accountService.deleteAccount(Number(req.params.id));
        return res.status(204).send();
    };
}