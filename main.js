function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = four.value.replace(/\s+/g, "");
	
	
	if (one.value == "int[]x;"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：int[] x;";
	}

	if (two.value == "x=newint[2];"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：x = new int[2];";
	}

	if (three.value == "x[0]=-20;"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：x[0]=-20;";
	}

	if (four.value == "x[1]=20;"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：x[1]=20;";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);