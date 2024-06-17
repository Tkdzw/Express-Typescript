import { AuditedAggregateRoot } from "./AuditedAggregateRoot";

export interface FullAuditedAggregateRoots<T> extends AuditedAggregateRoot<T>{
    lastModificationTime: Date;
    lastModifiedBy: string;
}