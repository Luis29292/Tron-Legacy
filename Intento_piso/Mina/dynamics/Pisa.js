var A = -1; var Z = 25;
var left = -1; var right = 5;
var cord = 0; var count = 0;
var secret = 0;

function convert(val)
{
	temp1 = (val-val%5)/5+1;
	temp2 = val%5 + 1;
	return(temp1+","+temp2);
}

function rnd(scale)
{
	var dd=new Date();
	return((Math.round(Math.abs(Math.sin(dd.getSeconds()))*1000000000)%scale));
}

function vmove(val)
{
	if ((cord + val > A) && (cord + val < Z)) {
		cord += val; document.test.alex[cord].checked = 1;
				if (val==5) {
					left += 5; right += 5
				};
				if (val==-5) {
					left -= 5; right -= 5
				};
				++count;
				document.test.screen1.value = "   " + count;
				document.test.screen.value = "   " + convert(cord);
				if (cord==bomb)
				{
					/*mensaje1()*/alert('\n\nTu ganaste!\n\ncon '+count+' casillas recorridas'); start();/**/
				}
	}
}

function hmove(val)
{
	if (cord + val < 0) {++secret;

					if (secret == 3) /*mensaje1()*/alert('\nThe BOMB @ '+convert(bomb)+'\n');}
	if ((cord + val > left) && (cord + val < right)) {cord += val; document.test.alex[cord].checked = 1;
					++count;
					document.test.screen1.value = "   " + count;
					document.test.screen.value = "   " + convert(cord);
					if (cord==bomb) {/*mensaje1()*/alert('\n\nPerdiste, Pisaste Bomba!\n\ncon '+count+' recorriste!'); start();}

	}
}
function start()
{
	cord = 0; count = 0;
	left = -1; right = 5;
	secret = 0;
	document.test.screen1.value = "   0";
	document.test.screen.value = "   1,1";
	document.test.alex[cord].checked = 1;
	bomb = rnd(24);
	if (!bomb) bomb=1;
}
/*
function mensaje1(){
	let body =document.getElementsByTagName("body");
	let div=document.createElement("div");
	div.innerText="ganaste"
	body.prepend(div)
}*/
