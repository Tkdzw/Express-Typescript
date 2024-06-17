import { FullAuditedAggregateRoots } from "./AggrerateRoots/FullAuditedAggregateRoot";

export interface Account extends FullAuditedAggregateRoots<number>{
    userName: string;
    email: string;
    passwordHash: string;
    activationToken: string;
    activationDate: Date;
    verificationDate: Date;
    verificationToken: string;
    
}
