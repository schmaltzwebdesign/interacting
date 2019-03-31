    var clicks = 0;
    var fillertextA = document.querySelector('.countingdivA')
    var firstText = ['Keep Pressing', 'You\'re Doing Great', 'Keep going!']
    var successA = ['Success!']
    var random = Math.floor(Math.random() * firstText.length)
    var numberClicks = 10;
    document.getElementById("variableNum").innerHTML = numberClicks;
    var fillertextB = document.querySelector('.countingdivB')
    var winnerA = ['You have completed the task!']

    function onClick() {
    	clicks += 1;
    	document.getElementById("clicks").innerHTML = clicks;
    	if (clicks == numberClicks) {
    		fillertextA.textContent = firstText[random]
    	}
    	if (clicks >= numberClicks) {
    		fillertextA.textContent = successA
    	}
    	if (clicks < numberClicks) {
    		fillertextA.textContent = firstText[random]
    	}
    	if (clicks == numberClicks) {
    		fillertextB.textContent = winnerA[0]
    	}
    }