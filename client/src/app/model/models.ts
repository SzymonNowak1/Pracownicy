export class SalaryTarget {
    id: number;
    name: string;
    bankAccount: string;
    selected: boolean;
}

export class SalaryTargetUpdate {
    name: string;
    bankAccount: string;
}

export class Worker {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
    positionIds: number[];
}

export class WorkerUpdate {
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
    positionIds: number[];
}

export class Page<E> {
    totalElements: number;
    totalPages: number;
    perPage: number;
    page: number;
    elements: E[];
}

export class UserWorker {
    userId: number;
    workerId: number;
    username: string;
    roles: string[];
    email: string;
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    phoneNumber: string;
}

export class Configuration {
    id: number;
    name: string;
    description: string;
    value: string;
}