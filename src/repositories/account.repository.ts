import { Account } from "../models/account.model";

const accounts: Account[] = []; // This is a mock database. Replace with actual DB implementation.

export class AccountRepository {
    public async getAllAccounts(): Promise<Account[]> {
        return accounts;
    }

    public async getAccount(id: number): Promise<Account | null> {
        return accounts.find(account => account.id === id) || null;
    }

    public async createAccount(account: Account): Promise<Account> {
        accounts.push(account);
        return account;
    }

    public async updateAccount(id: number, account: Partial<Account>): Promise<Account | null> {
        const index = accounts.findIndex(acc => acc.id === id);
        if (index !== -1) {
            accounts[index] = { ...accounts[index], ...account };
            return accounts[index];
        }
        return null;
    }

    public async deleteAccount(id: number): Promise<void> {
        const index = accounts.findIndex(acc => acc.id === id);
        if (index !== -1) {
            accounts.splice(index, 1);
        }
    }
}
