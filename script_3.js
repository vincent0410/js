console.log("exercice 3");

 
	function Pyramid(size,n) {
		consoleOutput += "\n"
		for(let i=0; i < n; i++){
		    consoleOutput += " ";
		}
		for(let i=n; i < size; i++){
			consoleOutput += "#";
		}
		if(n > 0){
			Pyramid(size,n-1);
		}
	}

	let input = 0;
	while(input <= 0) {
	  input = prompt("Bonjour, combien veux-tu d'étage sur ta pyramide ?");
	}
	var consoleOutput =  "voila ta pyramide"+[input]+":";
	Pyramid(input,input);
	console.log(consoleOutput);
;

