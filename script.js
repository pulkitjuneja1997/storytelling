var animal1;
var animal2;
var animal3;
var a,b,c,d;



function getstory(){
	for(a=0;a<5;a++){
	
		document.getElementsByClassName("first")[a].innerHTML = localStorage.getItem("animal1");
		console.log(document.getElementsByClassName("first")[a].innerHTML);
	}

	for(b=0;b<5;b++){
	
		document.getElementsByClassName("second")[b].innerHTML = localStorage.getItem("animal2");
		console.log(document.getElementsByClassName("second")[b].innerHTML);
	}


	for(c=0;c<1;c++){
	
		document.getElementsByClassName("third")[c].innerHTML = localStorage.getItem("animal3");
		console.log(document.getElementsByClassName("third")[c].innerHTML);
	}

	for(d=0;d<3;d++){
	
		document.getElementsByClassName("verb")[d].innerHTML = localStorage.getItem("verb");
		console.log(document.getElementsByClassName("verb")[d].innerHTML);
	}

	document.getElementsByClassName("speed")[0].innerHTML = localStorage.getItem("speed");
	document.getElementsByClassName("adjective")[0].innerHTML = localStorage.getItem("adjective");
	document.getElementsByClassName("ans")[0].innerHTML = localStorage.getItem("answer");
	document.getElementsByClassName("number")[0].innerHTML = localStorage.getItem("number");
	document.getElementsByClassName("moral")[0].innerHTML = localStorage.getItem("moral");
	document.getElementsByClassName("quote")[0].innerHTML = localStorage.getItem("quote");


	
}

function answer(a){

	localStorage.setItem("answer",a);

};



function formstory(){



	animal1 = document.getElementById("animal").value;
	localStorage.setItem("animal1",animal1);
	 
	 animal2 = document.getElementById("anotheranimal").value;
	localStorage.setItem("animal2",animal2);


	 animal3 = document.getElementById("onemoreanimal").value;
	localStorage.setItem("animal3",animal3);

	verb = document.getElementById("verb").value;
	localStorage.setItem("verb",verb);


	adjective = document.getElementById("adjective").value;
	localStorage.setItem("adjective",adjective);


	speed = document.getElementById("speed").value;
	localStorage.setItem("speed",speed);

	number = document.getElementById("number").value;
	localStorage.setItem("number",number);


	// answer = document.getElementById("ans").value;
	// localStorage.setItem("answer",answer);

	quote = document.getElementById("quote").value;
	localStorage.setItem("quote",quote);

	moral = document.getElementById("message").value;
	localStorage.setItem("moral",moral);


}

