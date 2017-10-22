//1	2	3	4	5	6	7	8	    9   10	20	30	40	50	60	70	80	    90	100	200	300	400	500	600	700	800	    900  1000
//I	II	III	IV	V	VI	VII	VIII	IX	X	XX	XXX	XL	L	LX	LXX	LXXX    XC	C	CC	CCC	CD	D	DC	DCC	DCCC	CM   M


function toRomans(arabicNumber){

    // the finale string containing the number in Roman format
    var romanNumber = '';
    // create an object for every 10^X managed number
    var pos0 = {unit:"I", five:"V", ten:"X"};
    var pos1 = {unit:"X", five:"L", ten:"C"};
    var pos2 = {unit:"C", five:"D", ten:"M"};
    // create an object with the posX objects --> pos0 has position 0,  pos1 has position 1,  pos2 has position 2
    var table = [pos0, pos1, pos2];
    // convert the input number into string and reverse it to later think starting from the left --> shifting to right for a better human-readability
    // an alternative would be done without reversing the string and starting from the last character decrementing the index by one for every cycle (shifting to left), but it's less human-readability
    var reverseNumber = new String(arabicNumber).split("").reverse().join("");;
    // if is a valid number
    if(arabicNumber){

        // cicle for every single number starting from left --> with the string reversed it means starting from pos0, then pos1, pos2...
        for(i =0; i< reverseNumber.length; i++){

            var singleNumber = reverseNumber[i];
            // if 0, 10, 100, 1000.. will be managed with the next pos cycle
            if(singleNumber == 0){
                continue;
            } else if(singleNumber > 0 && singleNumber <= 3){
                for(let j=1; j<=singleNumber; j++){
                    romanNumber = table[i].unit + romanNumber;
                }
            } else if (singleNumber == 4) {
                romanNumber = table[i].unit + table[i].five + romanNumber;
            } else if (singleNumber == 5){
                romanNumber = table[i].five + romanNumber;
            } else if (singleNumber <= 8){
                let tmp = table[i].five;
                for(let j=6; j<= singleNumber; j++){
                    tmp += table[i].unit;
                }
                romanNumber = tmp + romanNumber;
            } else if (singleNumber == 9){
                romanNumber = table[i].unit + table[i].ten + romanNumber;
            } 
        }
        $('body').append('<p>' + arabicNumber +  ' = ' + romanNumber + '</p>');
    } else { // case not a valid number
        $('body').append('<p>' + arabicNumber +  ' is not a valid number in Arabic format');
    }
}

function test(){
    
    for(var z=1; z<1000; z++){
        if(z % 10 == 0){
            $('body').append('<hr>');
        }
        toRomans(z);
    }
}



