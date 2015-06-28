function getText(){
	var finalText = new Array();
	var innerText = document.body.innerText;
	var text = innerText.split(/\n/g);
	for(var i = 0; i < text.length; i++){
		var possible_sentence = text[i].split(" ");
		if(possible_sentence.length > 10){
			finalText.push(text[i]);
		}
	}
	return finalText;

}

chrome.runtime.sendMessage({greeting: getText()}, function(response) {
});
