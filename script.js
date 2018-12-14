alert("Добро пожаловать!");

var str = prompt("Как Вас зовут?","имя");
if ((str!=null)&&(str!=undefined)&&(str!="")) {
	alert("Привет "+str+" !");
}
else alert("Вы не ввели имя");

var isEl = confirm("Вы электрик?");
alert(isEl);
