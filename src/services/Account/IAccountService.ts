import { Account } from "../../models/account.model";


export interface IAccountService {
    getAllAccounts(): Promise<Account[]>;
    getAccount(id: number): Promise<Account | null>;
    createAccount(account: Account): Promise<Account>;
    updateAccount(id: number, account: Partial<Account>): Promise<Account | null>;
    deleteAccount(id: number): Promise<void>;
}