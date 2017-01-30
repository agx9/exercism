
export default class Hamming {
     
    compute(strandOne, strandTwo) {
        
        if(strandOne.length != strandTwo.length)
            throw new Error('DNA strands must be of equal length.');        
        
        strandOne = strandOne.split('');
        strandTwo = strandTwo.split(''); 

        return strandOne.filter((value, index) => {
            return value != strandTwo[index];        
        }).length;
        
    }

} 