const titlalag=document.getElementById("header-title")
titlalag.textContent="Sagar Ki Website"
var itemslists1=document.getElementsByClassName("list-group-item")
var divtitle=document.getElementsByClassName("title")
var form = document.getElementsByClassName("btn btn-dark")
var header=document.getElementById("main-header")

divtitle[0].textContent="Vastuyein Jodein"
divtitle[0].style.fontWeight="bold"
divtitle[0].style.color="green"

divtitle[1].innerHTML="<h4>Vastuyein</h4>"

form[0].value="Jama Karein"
itemslists1[0].textContent="Vastu 1"
itemslists1[0].style.color="Red"
itemslists1[0].style.fontWeight="Bold"

// itemslists1[0].style="Red"

itemslists1[1].textContent="Vastu 2"
itemslists1[1].style.color="Blue"
itemslists1[1].style.fontWeight="Bold"

itemslists1[2].textContent="Vastu 3"
itemslists1[2].style.background="green"
itemslists1[2].style.color="Black"
itemslists1[2].style.fontWeight="Bold"

itemslists1[3].textContent="Vastu 4"
itemslists1[3].style.color="Green"
itemslists1[3].style.fontWeight="Bold"

header.style.borderBottom="solid 3px #000"
header.style.borderTop="solid 3px #000"
header.style.borderLeft="solid 3px #000"
header.style.borderRight="solid 3px #000"



// console.log(header)

