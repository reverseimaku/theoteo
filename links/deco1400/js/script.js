/* jQuery functions */
$(document).ready(function() {

	 /* cycle slide plugin */
	 $('.cycle-slideshow img').cycle({ 
		resizeContainer: false,
		slideResize: false
	  }); 
	
});

/* Vanilla JavaScript Functions */

	var prevScrollPos = window.pageYOffset;


	window.onscroll =function() {

		var currentScrollPos = window.pageYOffset;

		function scrollToTop() {

			window.scrollTop() = 0;

		}

		/* menu bar scroll */
		if (prevScrollPos > currentScrollPos) {

			document.getElementById("menu").style.top = "0px"; 

		}

		else {

			document.getElementById("menu").style.top = "-120px";

		}

		prevScrollPos = currentScrollPos;

	}

	const hamburger = document.getElementById('hamburger');
	const navul=document.getElementById('menu');

	const subMenuA = document.querySelector('#sub-menu-about'); 
	const subMenuW =document.querySelector('#sub-menu-wwo');


	/*essentially changing the width of the submenus in mobile version*/
	hamburger.addEventListener('click', ()=>{
		navul.classList.toggle('show');
		if (subMenuA.id == "sub-menu-about") {

			subMenuA.className += " mobile";

		} else {

		  subMenuA.id = "sub-menu-about";
		  subMenuA.style.setProperty('width','initial');

		}

	});

	
	var mQuery = window.matchMedia("(max-width: 1000px)")


	/*Toggle the two submenus ONLY in mobile*/
	function clickNavA() {
		console.log("Submenu");

			if (subMenuA.style.display == "flex")
			{
				subMenuA.style.display = "none";
			}
			else {
				subMenuA.style.display = "flex";
				subMenuW.style.display="none";
				}
	}

	function clickNavW() {
		console.log("Submenu2");
			if (subMenuW.style.display == "flex")
			{
				subMenuW.style.display = "none";
				
			}
			else {
				subMenuW.style.display = "flex";
				subMenuA.style.display = "none";
				
			}

	}

	/*validate contact us form */
	function validateForm(){

		event.preventDefault();
		var eName = document.querySelector("#enquiry-name").value;
		var eEmail = document.querySelector("#enquiry-email").value;
		var ePhone = document.querySelector("#enquiry-phone").value;
		var eMessage=document.querySelector("#enquiry-message").value;	
		complete=false;

		if (eName!="" && eEmail !="" && ePhone!="" && eMessage!="")
		{
			alert('Form submitted successfully!');
			complete=true;
			
		}

		else {
			alert ('Please fill in all fields before continuing');
		}

		if (complete==true)
		{
			window.open("index.html");
		}
}


/* collapsible for FAQ section */
var faqcontainer = document.getElementsByClassName("faqq");
var i;

for (i = 0; i < faqcontainer.length; i++) {
	faqcontainer[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling; /* gets content of next sibling */

	if (content.style.maxHeight) {
		content.style.maxHeight=null;
	}
	else {
		content.style.maxHeight=content.scrollHeight + "px";
	}
  });
}