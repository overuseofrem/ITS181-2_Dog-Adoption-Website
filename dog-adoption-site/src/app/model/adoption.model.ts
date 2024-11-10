import { Dog } from "./dog.model";
import { User } from "./user.model";

export class Adoption {
    id: number = 0;
    status?: string
    datetime: Date = new Date();
    
    user?: User;
    dog?: Dog;
}
