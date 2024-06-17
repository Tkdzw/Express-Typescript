import { BasicAggregateRoot } from "./BasicAggregateRoot";

export interface AuditedAggregateRoot<T> extends BasicAggregateRoot<T>{
    creationTime: Date;
    creatorId: number;
    isDeleted:boolean;
    deletorId: number;
    deletionTime: Date;

}


