//Question 1
let theContainer = document.getElementById('container')
console.log(theContainer)

//Question 2
let theContainer2 = document.querySelector("#container")
console.log(theContainer2)

//Question 3
let allSecond = document.querySelectorAll(".second")
console.log(allSecond)

//Quesiton4
let i =document.getElementById("container").querySelector('section ol .third')
console.log(i)

//Question5
let para = document.createElement("p");
let paraNode = document.createTextNode("Hello")
para.appendChild(paraNode)
let existing = document.getElementById("container")
existing.appendChild(paraNode) 



//Question 10
let node = document.createElement("LI");                 // Create a <li> node
let textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

//Question 11
let theOrderList = document.getElementById("orderList")
let items = theOrderList.getElementsByTagName("li")
for(let i  =0; i < items.length; i++)
{
    document.getElementById('orderList').style.backgroundColor = "green"
}

//Question 12
var ele = document.getElementById("myDiv")
ele.remove();
  