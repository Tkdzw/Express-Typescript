import { Account } from "../../models/account.model";
import { AccountRepository } from "../../repositories/account.repository";
import { IAccountService } from "./IAccountService";

export class AccountService implements IAccountService{
    private accountRepository: AccountRepository;

    constructor(){
        this.accountRepository = new AccountRepository();
    };

    getAllAccounts(): Promise<Account[]> {
        return this.accountRepository.getAllAccounts();
    }
    getAccount(id: number): Promise<Account | null> {
        return this.accountRepository.getAccount(id);
    }
    createAccount(account: Account): Promise<Account> {
        return this.accountRepository.createAccount(account);
    }
    updateAccount(id: number, account: Partial<Account>): Promise<Account | null> {
        return this.accountRepository.updateAccount(id, account);
    }
    deleteAccount(id: number): Promise<void> {
        return this.accountRepository.deleteAccount(id);
    }
    
}