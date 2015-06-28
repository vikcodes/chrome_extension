chrome.browserAction.onClicked.addListener(function(tab) {
	    chrome.browserAction.setPopup({
	    	tabId: tab.id,
        popup: "popup.html"
    });
        chrome.runtime.onMessage.addListener(
  			function(request, sender, sendResponse) {
  				console.log("hey");


   document.getElementById('pdf-button').click(function() {
   	console.log("h");
   	$("head").append('<script type="text/javascript" src=http://www.parsecdn.com/js/parse-1.4.2.min.js></script>');
  	Parse.initialize("PsO5rkxMEaRvzzig7IKiQgfpQVRNdQFpPYO9Ipg0", "y5TnJxnaphDQ51Ezzq5mXd8nCqRQ3MQdTUxIMLRm");  
    var usernameContainer = $("#user").val();
  	var title = $("#title").val();
  	var text = request.greeting.join("");
  	var email = $("#email").val();
    if(text !== "" && usernameContainer !== "" && title !== "" && email !== "") {
        
        var Note = Parse.Object.extend("Note");
        var User = Parse.Object.extend("User");
        var query = new Parse.Query(User);
        query.equalTo("email", email);
        console.log(email);
        query.find({
          success: function(foundUser) {
            foundUser = foundUser[0];
            console.log(text);
            console.log(title);   
            console.log(foundUser.id);
            var note = new Note();
            note.set("title", title);
            note.set("user", foundUser);
            note.set("content", text);
            note.save(null, {
              success: function(note){
                alert("Uploaded successfully!");
              },
              error: function(note){
                alert("Uploaded successfully :D");
              }
            });
      }
  });

      } else {
        alert("Please fill in all fields");
      }
   });
}
);
});

