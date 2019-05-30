

//Spørgsmålene står her 
let Q1 = document.querySelector(".Q1");
let Q2 = document.querySelector(".Q2");
let Q3 = document.querySelector(".Q3");
let Q4 = document.querySelector(".Q4");
let Q5 = document.querySelector(".Q5");
let Q6 = document.querySelector(".Q6");
let Q7 = document.querySelector(".Q7");
let Q8 = document.querySelector(".Q8");
let Q9 = document.querySelector(".Q9");
let Q10 = document.querySelector(".Q10");

//De forskellige svar muligheder 
let C1 = document.querySelector(".C1");
let C2 = document.querySelector(".C2");
let C3 = document.querySelector(".C3");
let C4 = document.querySelector(".C4");
let C5 = document.querySelector(".C5");
let C6 = document.querySelector(".C6");
let C7 = document.querySelector(".C7");
let C8 = document.querySelector(".C8");
let C9 = document.querySelector(".C9");
let C10 = document.querySelector(".C10");
let C11 = document.querySelector(".C11");
let C12 = document.querySelector(".C12");
let C13 = document.querySelector(".C13");
let C14 = document.querySelector(".C14");
let C15 = document.querySelector(".C15");
let C16 = document.querySelector(".C16");
let C17 = document.querySelector(".C17");
let C18 = document.querySelector(".C18");
let C19 = document.querySelector(".C19");
let C20 = document.querySelector(".C20");

// Hvad der sker når man klikker på et svar 
C1.addEventListener("click", C1Fx);
C2.addEventListener("click", C2Fx);
C3.addEventListener("click", C3Fx);
C4.addEventListener("click", C4Fx);
C5.addEventListener("click", C5Fx);
C6.addEventListener("click", C6Fx);
C7.addEventListener("click", C7Fx);
C8.addEventListener("click", C8Fx);
C9.addEventListener("click", C9Fx);
C10.addEventListener("click", C10Fx);
C11.addEventListener("click", C11Fx);
C12.addEventListener("click", C12Fx);
C13.addEventListener("click", C13Fx);
C14.addEventListener("click", C14Fx);
C15.addEventListener("click", C15Fx);
C16.addEventListener("click", C16Fx);
C17.addEventListener("click", C17Fx);
C18.addEventListener("click", C18Fx);
C19.addEventListener("click", C19Fx);
C20.addEventListener("click", C20Fx);

//
Q10.style.display = "none";
Q9.style.display = "none";
Q8.style.display = "none";
Q7.style.display = "none";
Q6.style.display = "none";
Q5.style.display = "none";
Q4.style.display = "none";
Q3.style.display = "none";
Q2.style.display = "none";
Q1.style.display = "block";



//variable  



let venstre = 0;
let konservative = 0;
let stramkurs = 0;
let socialDemokratiet = 0;
let alternativet = 0;
let SF = 0;
let radikaleVenstre = 0;
let klausR = 0;
let liberalAlliance = 0;
let enhedesListen = 0;
let kristenDemokraterne = 0;
let nyeBorgelige = 0;
let danskFolkeparti = 0;




// spørgsmål 1: DK nok miljøet?
// Ja 
function C1Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "block";
	Q1.style.display = "none";

	beregnStemmer(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5);

}
// nej 
function C2Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "block";
	Q1.style.display = "none";

	beregnStemmer(5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0);
}

//spørgsmål 2: Klima Afgift?
//ja 
function C3Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "block";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(0, 2, 0, 3, 5, 3, 3, 4, 0, 4, 4, 0, 0);
}

//nej 
function C4Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "block";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(2, 2, 3, 0, 0, 0, 0, 0, 4, 0, 0, 5, 4);
}

//spørgsmål 3: Stramninger Udlændinge? 
//ja 
function C5Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "block";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(3, 3, 5, 2, 0, 0, 0, 3, 3, 0, 0, 5, 5);
}

//nej 
function C6Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "block";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(2, 1, 0, 2, 5, 4, 5, 1, 2, 5, 3, 0, 0);
}

//spørgsmål 4: Asylstop?
//ja 
function C7Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "block";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(3, 4, 5, 1, 0, 0, 0, 2, 3, 0, 0, 5, 4);
}

//nej 
function C8Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "block";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(1, 0, 0, 1, 5, 4, 5, 1, 2, 0, 3, 0, 0);
}

//spørgsmål 5: Cigaretter?
//ja 
function C9Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "block";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(3, 4, 0, 3, 5, 4, 5, 0, 0, 4, 5, 0, 2);
}

//nej 
function C10Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "block";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(1, 1, 2, 1, 0, 1, 0, 4, 5, 0, 0, 4, 2);
}

//spørgsmål 6: uddnnelsesloft? 
//ja 
function C11Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "block";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(0, 1, 0, 4, 5, 5, 5, 5, 4, 5, 5, 2, 0);
}

//nej 
function C12Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "block";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5);
}

//spørgsmål 7: Topskat?
//ja 
function C13Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "block";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(3, 4, 3, 2, 2, 0, 0, 5, 5, 1, 2, 4, 1);
}

//nej 
function C14Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "block";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(2, 1, 2, 3, 4, 4, 5, 0, 0, 4, 4, 2, 4);
}

//spørgsmål 8: Kontanthjælpsloft?
//ja 
function C15Fx() {
	Q10.style.display = "none";
	Q9.style.display = "block";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(0, 0, 0, 4, 5, 5, 5, 4, 2, 5, 4, 2, 2);
}

//nej 
function C16Fx() {
	Q10.style.display = "none";
	Q9.style.display = "block";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(5, 5, 0, 1, 0, 0, 0, 1, 3, 0, 1, 3, 3);
}

//spørgsmål 9: Cannabis? 
//ja 
function C17Fx() {
	Q10.style.display = "block";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(0, 0, 0, 2, 5, 5, 5, 5, 4, 5, 0, 2, 0);
}

//nej 
function C18Fx() {
	Q10.style.display = "block";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(5, 5, 0, 3, 0, 0, 0, 0, 1, 0, 5, 3, 2);
}

//spørgsmål 10: Samtykke?
//ja 
function C19Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(4, 4, 0, 5, 5, 5, 5, 3, 3, 5, 2, 0, 3);
	 

	
	let all = document.querySelector(".resultText");
	
	let obj1 = {
		image: "v.png",
		text: "Venstre V:",
		val: venstre
	}
	let obj2 = {
		image: "kons.png",
		text: "Det Konservative Folkeparti C:",
		val: konservative
	}
	let obj3 = {
		image: "sk.png",
		text: "Stram kurs P:",
		val: stramkurs
	}
	let obj4 = {
		image: "a.png",
		text: "Socialdemokratiet S:",
		val: socialDemokratiet
	}

	let obj5 = {
		image: "alt.png",
		text: "Alternativet Å:",
		val: alternativet
	}
	
	let obj6 = {
		image: "sf.png",
		text: "SF - Socialitisk Folkeparti F:",
		val: SF
	}
	
	let obj7 = {
		image: "rad.png",
		text: "Radikale Venstre B:",
		val: radikaleVenstre
	}

	let obj8 = {
		image: "a.png",
		text: "Klaus Riskjær Pedersen E:",
		val: klausR
	}

	let obj9 = {
		image: "la.png",
		text: "Liberal Alliance I:",
		val: liberalAlliance
	}

	let obj10 = {
		image: "enlist.png",
		text: "Enhedslisten Ø:",
		val: enhedesListen
	}

	let obj11 = {
		image: "krist.png",
		text: "Kristendemokraterne K:",
		val: kristenDemokraterne
	}

	let obj12 = {
		image: "nyb.png",
		text: "Nye Borgerlige D:",
		val: nyeBorgelige
	}

	let obj13 = {
		image: "df.png",
		text: "Dansk Folkeparti O:",
		val: danskFolkeparti
	}
	

	let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13]
    	
	
	
	function compare(a, b) {
		if (a.val > b.val) {
			return -1;
		}
		if (a.val < b.val) {
			return 1;
		}
		return 0;
	}
	arr.sort(compare);


	arr = arr.filter(function (number) {
		return number.val > 18 ;
	  });
	


	let htmlArray = arr.map((e) => {
		return  '<img src="'+e.image+'">' + '\xa0\xa0\xa0\xa0\xa0' + e.text + " " + e.val + "<br>"
	}).join("")

	
	
	
	/*/function points(htmlArray) {
		return htmlArray.val >= 20;
}/**/

	all.innerHTML = htmlArray
}

//nej 
function C20Fx() {
	Q10.style.display = "none";
	Q9.style.display = "none";
	Q8.style.display = "none";
	Q7.style.display = "none";
	Q6.style.display = "none";
	Q5.style.display = "none";
	Q4.style.display = "none";
	Q3.style.display = "none";
	Q2.style.display = "none";
	Q1.style.display = "none";
	beregnStemmer(1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 3, 2, 2);

	let all = document.querySelector(".resultText");
	let obj1 = {
		image: "v.png",
		text: "Venstre V:",
		val: venstre
	}
	let obj2 = {
		image: "kons.png",
		text: "Det Konservative Folkeparti C:",
		val: konservative
	}
	let obj3 = {
		image: "sk.png",
		text: "Stram kurs P:",
		val: stramkurs
	}
	let obj4 = {
		image: "a.png",
		text: "Socialdemokratiet S:",
		val: socialDemokratiet
	}

	let obj5 = {
		image: "alt.png",
		text: "Alternativet Å:",
		val: alternativet
	}
	
	let obj6 = {
		image: "sf.png",
		text: "SF - Socialitisk Folkeparti F:",
		val: SF
	}
	
	let obj7 = {
		image: "rad.png",
		text: "Radikale Venstre B:",
		val: radikaleVenstre
	}

	let obj8 = {
		image: "krp.png",
		text: "Klaus Riskjær Pedersen E:",
		val: klausR
	}

	let obj9 = {
		image: "la.png",
		text: "Liberal Alliance I:",
		val: liberalAlliance
	}

	let obj10 = {
		image: "enlist.png",
		text: "Enhedslisten Ø:",
		val: enhedesListen
	}

	let obj11 = {
		image: "krist.png",
		text: "Kristendemokraterne K:",
		val: kristenDemokraterne
	}

	let obj12 = {
		image: "nyb.png",
		text: "Nye Borgerlige D:",
		val: nyeBorgelige
	}

	let obj13 = {
		image: "df.png",
		text: "Dansk Folkeparti O:",
		val: danskFolkeparti
	}
	
	
	
	let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13]

	  arr = arr.filter(function (number) {
		return number.val > 20;
	  });


	function compare(a, b) {
		if (a.val > b.val) {
			return -1;
		}
		if (a.val < b.val) {
			return 1;
		}
		return 0;
	}
	arr.sort(compare);

	 
	
	let htmlArray = arr.map((e) => {
		return '<img src="'+e.image+'">' + '\xa0\xa0' + e.text + " " + e.val + "<br>"
	}).join("")

	
	all.innerHTML = htmlArray
}


function beregnStemmer(venstrePoint, konservativePoint, stramkursPoint, socialDemokratietPoint, alternativetPoint, sFPoint, radikaleVenstrePoint, klausRPoint, liberalAlliancePoint, enhedesListenPoint, kristenDemokraternePoint, nyeBorgeligePoint, danskFolkepartiPoint) {

	venstre = venstrePoint + venstre;
	konservative = konservativePoint + konservative;
	stramkurs = stramkursPoint + konservative;
	socialDemokratiet = socialDemokratietPoint + socialDemokratiet;
	alternativet = alternativetPoint + alternativet;
	SF = sFPoint + SF;
	radikaleVenstre = radikaleVenstrePoint + radikaleVenstre;
	klausR = klausRPoint + klausR;
	liberalAlliance = liberalAlliancePoint + liberalAlliance;
	enhedesListen = enhedesListenPoint + enhedesListen;
	kristenDemokraterne = kristenDemokraternePoint + kristenDemokraterne;
	nyeBorgelige = nyeBorgeligePoint + nyeBorgelige;
	danskFolkeparti = danskFolkepartiPoint + danskFolkeparti;
}


// ACTIVE NAVBAR
 // $(".navItem").on("click", function(e){
//	$("li.navItem").removeClass("active");
//	$(this).addClass("active");
 // }); 