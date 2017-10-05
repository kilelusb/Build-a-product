var NodeList= document.getElementsByTagName("LI");
var i;
for (i=0; i<NodeList.length; i++){
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className="close";
    button.appendChild(txt);
    NodeList[i].appendChild(button);
}
var close= document.getElementsByClassName("close");
var i;
for (i=0; i< close.length; i++) {
    close[i].onclick=function(){
        var div= this.parentElement;
        div.style.display = "none";
    }
}
function newElement(){
    var li = document.createElement(li);
    var inputItem = document.getElementById("myInput").item;
    var t = document.createTextNode(inputItem);
    li.appendChild(t);
    if (inputItem ===''){
        alert("You have not added an item!");
    }
    else{
        document.getElementById("myOL").appendChild(li);
    }
    document.getElementById("myInput").item = "";
    
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className="close";
    button.appendChild(txt);
    li.appendChild(button);
    for (i=0; i< close.length; i++) {
    close[i].onclick=function(){
        var div= this.parentElement;
        div.style.display = "none";
    }
    }
}