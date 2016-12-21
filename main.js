
function todo(){
  var text = document.getElementById('input').value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(text);
  li.appendChild(textNode);
  var ul = document.getElementById('ul');
  ul.appendChild(li);
  
  var remove = document.getElementsByClassName('remove');
  var span = document.createElement('span');
  var textSpan = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(textSpan);
  li.appendChild(span);
  
  for(var i = 0 ; i < remove.length; i++){
  remove[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }  
  }
}