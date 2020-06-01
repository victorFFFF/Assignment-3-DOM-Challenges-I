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