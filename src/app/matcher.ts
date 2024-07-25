import { musician, musicianToMusician, musicianValidator } from "./musician";

export class matcher {

    getAllRatings(musician: musician, musicians: musician[]): musicianToMusician[] {
        let output: musicianToMusician[] = [];
        for (let i = 0; i < musicians.length; i++) {
            let m2 = musicians[i];
            let rating = this.getRating(musician, m2);

            if (rating > 0) {
                let m2m: musicianToMusician = {
                    id: 1,
                    id1: musician.id,
                    id2: m2.id,
                    rating: rating,
                    sender:musician, 
                    reciever:m2
                };
                output.push(m2m);
            }
        }
        output.sort((a,b)=> a.rating - b.rating)

        return output;
    }

    getRating(musician1: musician, musician2: musician): number {
        let validator: musicianValidator = new musicianValidator();
        // if(musician1 === undefined || musician2 === undefined){
        //     return 0; 
        // }
        //invalid match
        if (!validator.validateRelationship(musician1, musician2)) {
            return 0;
        }

        //putting more weight on genre, +2 points per match 
        let rating = 0;
        let commonGenres: string[] = musician1.genre.filter(g => musician2.genre.includes(g));
        rating = commonGenres.length * 2;

        //one point per vocal match
        let vocalInterests: string[] = musician1.vocalInterest.filter(v => musician2.vocalInterest.includes(v));
        rating += vocalInterests.length;

        //Assuming you want a diversity of instruments not 3 guys all only playing guitar
        let uniqueInstruments: string[] = musician1.instrumentRange.filter(i => !musician2.instrumentRange.includes(i));

        rating += uniqueInstruments.length;

        return rating;
    }
}