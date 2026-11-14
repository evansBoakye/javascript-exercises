const removeFromArray = function(array, ...theArgs) {
    // Hvor mange gange findes dette element i listen
    for (let i = 0; i < theArgs.length; i++) {
        let elementToFind = theArgs[i];
        let amountOfTimesElementInList = 0;

        // Hvor mange gange er elementToFind i listen?
        for (let y = 0; y < array.length; y++) {
            if(array[y] === elementToFind) {
			    amountOfTimesElementInList++
		    }
	    }
        // elementToFind er amountOfTimesElementInList
        // Lav et loop der splice() det antal gange elementet
        // er i listen. Splice det antal gange
        for (let y = 0; y < amountOfTimesElementInList; y++) {
            for(let z = 0; z < array.length; z++) {
                if(array[z] === elementToFind) {
                    array.splice(z, 1)
                    z--;
                }
            }
        }
    }
    return array
}
// Do not edit below this line
module.exports = removeFromArray;
