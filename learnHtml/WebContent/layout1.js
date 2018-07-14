var id1_Head= "temp";
var id1_Para = "temp1"

function method1() {

    
    var finalText = document.createElement("p");
    var finalHead = document.createElement("h1");
    
    
    
    var main = document.getElementById("main3");
    var finalHead1 = main.appendChild(finalHead);
    var newat = document.createAttribute("id");
    newat.value = id1_Head;
    finalHead.setAttributeNode(newat);
    //finalHead.setAttribute("id", id1_Head);

    finalHead1.appendChild(document.createTextNode("New Heading"));

    //var main = document.getElementsByClassName("main3");
    var finalText1 = main.appendChild(finalText);
    finalText1.setAttribute("id", id1_Para);
    finalText1.appendChild(document.createTextNode("New Text area "));
} 

function method2() {
    var ele = document.getElementById(id1_Head);
    var par = ele.parentNode;
    par.removeChild(ele);
    par.removeChild(document.getElementById(id1_Para));
}

function changeColor() {
    
    var ele1 = document.getElementById("main3");
    var chil1 = ele1.children;
   //alert (chil1[0].toString());
    
    for (var i = 0 ; i <chil1.length; i++) {
            chil1[i].style.color = "blue";
        }
    
    
}