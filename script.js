var k, w, v;
var q = document.getElementById("q");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

function fun() {
	k = 0;
	w = 0;
	v = 0;	
	questions(k);
	box2.style.display = "none";
	box3.style.display = "none";
}

function main() {
	box1.style.display = "block";
	box2.style.display = "none";
	box3.style.display = "none";
}
function tst() {
	box1.style.display = "none";
	box2.style.display = "block";
	box3.style.display = "none";
}
function maps() {
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "block";
}

function questions(num) {
	switch (num) {
		case 0: q.innerHTML = "<h2>Какой город является столицей Башкирии?</h2>";
				q.innerHTML += "<label><input type='radio' name='r1' value='100'/>Москва</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='101'/>Уфа</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='102'/>Кубиязы</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='103'/>Бирск</label><br><br>";
				prev.disabled = true;				
				w = 1;
		break;
		case 1: q.innerHTML = "<h2>Как называется самая высокая гора в Башкирии?</h2>";
				q.innerHTML += "<label><input type='radio' name='r1' value='104'/>Мелеуз</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='105'/>Белая</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='106'/>Ямантау</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='107'/>Янгантау</label><br><br>";
				prev.disabled = false;				
				w = 2;
		break;
		case 2: q.innerHTML = "<h2>Когда Башкирия присоединилась к России?</h2>";
				q.innerHTML += "<label><input type='radio' name='r1' value='108'/>В 1557 году</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='109'/>В 1683 году</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='110'/>В 1900 году</label><br>";
				q.innerHTML += "<label><input type='radio' name='r1' value='111'/>В 2000 году</label><br><br>";
				w = 0;
		break;
		default: q.innerHTML = "<br><br><h3>Количество верных ответов: "+v+"</h3>"; 
				prev.disabled = true;  next.disabled = true;  break;
	}
}

function func() {
	var r1 = document.getElementsByName("r1");
	var p = -1;
	for (var i = 0; i < r1.length; i++) 
		if (r1[i].checked) p = i;	
	if (p===w) v++;		
}

function funcnext() {
	func();	
	k++;
	questions(k);
}

function funcprev() {	
	k--;
	v--;
	questions(k);
}

