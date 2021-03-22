document.addEventListener('DOMContentLoaded', function() {

var words = (function(){
	var words = [
			'Pomagam',
			'Robię',
			'Siedzę'
			],
		el = document.querySelector('.verb'),
		currentIndex,
		currentWord,
		prevWord,
		duration = 2000;

    let i = 0;

	var _getIndex = function(max, min) {
    	
    	i ++;
    	
    	if (i >= 3) {
        	i = 0;
    	}
    	
		currentIndex = i;

		return currentIndex;
	};

	var _getWord = function(index){
		currentWord = words[index];

		return currentWord;
	};

	var _clear = function() {

		setTimeout(function(){
			el.className = 'verb';
		}, duration/4);
	};

	var _toggleWord = function(duration){
		setInterval(function(){
			//Stores value of previous word
			prevWord = currentWord;

			//Generate new current word
			currentWord = words[_getIndex(words.length-1, 0)];

			//Generate new word if prev matches current
			if(prevWord === currentWord){

				currentWord = words[_getIndex(words.length-1, 0)];
			}

			//Swap new value
			el.innerHTML = currentWord;

			//Clear class styles
			_clear();

			//Fade in word
			el.classList.add(
				'js-block',
				'js-fade-in-verb'
				);

		}, duration);
	};

	var _init = function(){
		_toggleWord(duration);
	};

	//Public API
	return {
		init : function(){
			_init();
		}
	};
})();

words.init();


}, false);