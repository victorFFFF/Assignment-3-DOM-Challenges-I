//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementById("container").querySelector('section ol .third')

//5) Give the section with an id of container the text "Hello!".
var message=document.getElementById('container')
message.append('Hello!')

//6) Add the class main to the div with a class of footer.
const ans6 = document.getElementsByClassName("footer")[0].classList.add("main");
console.log(ans6);