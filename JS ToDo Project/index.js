

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    if(item == '' || IsNumeric(item)){
        input.value = '';
        alert('Please Give Proper Input');
    }
    else{
        //create li...
        li = document.createElement('li');
        //create checkbox...
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        //create label...
        var label = document.createElement('label');
       
        ul.appendChild(li);
        li.appendChild(checkbox);
        checkbox.name = 'foo';
        li.appendChild(label);
        label.appendChild(textnode); 
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(function(){
            li.className = 'mycheck';
        },5);
        input.value = '';
    }
}


//select all function...
function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }


//remove the checked element...
function removeItem(){
    li = ul.children; 
    for (let index = 0; index < li.length; index++) {    
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
    
    document.getElementById("select").checked = false;
}

function IsNumeric(num){
  let x=1;
  let y=1/num;
  if(isNaN(y)){
      return false;
  }
  return true;
}



//drage select all button...

dragElement(document.getElementById("select_all"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById('select_all')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById('select_all').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


