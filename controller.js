let minutes = 4; // minutes before starting the script
let timer = 2000; // every X milliseconds, trigger the button click event

let pathToButton = ".claimable-bonus__icon";

setTimeout(function() {
		
	setInterval(function() {

		if(document.querySelector(pathToButton)) {

			document.querySelector(pathToButton).click()
		}

	}, timer)

},minutes*60*1000);
