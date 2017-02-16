export default class Transcriptor {

    toRna (dna) {        

        const dnaRna = {
            'G' : 'C',
            'C' : 'G',
            'T' : 'A',
            'A' : 'U'
        };                        

        return [...dna].map((eachItem) => {
            
            if(dnaRna[eachItem] == undefined) 
                throw new Error('Invalid input DNA.');

            return dnaRna[eachItem];

        }).join('');

    }
    
}