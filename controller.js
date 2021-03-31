let timer = 1000; // every X milliseconds, trigger the button click event

let pathToButton = ".claimable-bonus__icon";

setTimeout(function() {
		
	setInterval(function() {

		if(document.querySelector(pathToButton)) {

			document.querySelector(pathToButton).click()
		}

	}, timer)

},8000);
