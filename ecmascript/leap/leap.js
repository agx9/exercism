export default function isLeapYear(year) {

    if(year % 400 == 0 ) { //every year that is evenly divisible by 400  
        return true;
    } else if (year % 100 == 0) {//every year that is  evenly divisible by 100 and not by 400 
        return false;
    } else if(year % 4 == 0) { //every year that is evenly divisible by 4
        return true;
    } else {
        return false;
    }
                   
}