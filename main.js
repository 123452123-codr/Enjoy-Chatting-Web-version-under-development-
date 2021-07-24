var messages = document.getElementById('message');
var text = document.getElementById('text');
var button = document.getElementById('send');

button.addEventListener("click", function(){
  var newMessage = document.createElement("li");
  newMessage.innerHTML = text.value;
  messages.appendChild(newMessage);
  text.value = "";
});
