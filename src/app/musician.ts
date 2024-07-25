export interface musician{
    id:number;
    name:string;
    location:string; 
    image:string; 
    biography:string;
    instrumentRange:string[]; 
    vocalInterest:string[]; 
    genre:string[]; 
    type:musicType
}

export interface musicianToMusician{
    id:number; 
    id1:number; 
    id2:number;
    rating:number; 
    sender?:musician;
    reciever?:musician;
    //record the match if both accept
    senderAccepted?:boolean; 
    recieverAccepted?:boolean; 
}

//since Im not using a database I am validating the relationship via a class
export class musicianValidator{
    validateRelationship(musician1:musician, musician2:musician):boolean{
        if(musician1.id === musician2.id){
            return false; 
        }
        if(musician1.type === musician2.type){
            return false; 
        }

        return true; 
    }
}

export enum musicType{
    Instrumentalist, 
    Vocalist
}