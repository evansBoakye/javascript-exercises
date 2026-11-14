
Hvis der skal fjernes et element, som er i arrayet flere gange, hvad gør jeg?

TheArgs har et element, der er flere af i en liste

Er der flere af det her element i listen?

For hvert element I theArg skal jeg spørge om:
Hvor mange gange findes dette element i listen:
For (let I = 0; I < theArg.length; I++) {
	elementToFind = theArgs[i]
	Let amountOfTimesElementInList = 0;

	// er det her element flere gange i listen?
	For (let y = 0; I < array.length; I++) {
		if(array[i] === elementToFind) {
			amountOfTimesElementInList++	
		}
	}
	For (let y = 0; I < amountOfTimesElementInList; I++ {
		// find indexet af elementet der skal slettes og slet
		for (let z = 0; y < array.length; I++) {
			if(array[z] === elementToFind) {
				splice(array[y], 1)
				y—
			}	
		}
		array.splice(indexesOfToBeDeletedElements[I], 1)
	}