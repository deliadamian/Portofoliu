// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")



//Add event listener
button.addEventListener("click", altaViata)

//Define function
function altaViata() {
		nume.innerHTML="Software Engineer"
		prenume.innerHTML="Bosch"
		educatie.innerHTML="Experiente"
		asteptari.innerHTML=" <ul><li>Libertate financiara</li><li>Educatie superioara</li></ul>"
		img.src="images/imaginea.jpg"
		img.style.opacity= "70%"
		img.style.width="200px"
		img.style.height="300px"
		img.style.border="3px solid black"

}