"use strict"

let arrA = [];
let arrT = [];
let arrG = [];
let arrC = [];

let sequence = [];


function arrayGenerator() {

	sequence = document.getElementById("dna-seq").value.toUpperCase();

	for (let base of sequence) {
		if (base === "A") {
			arrA.push(base);
		} else if (base === "T") {
			arrT.push(base);
		} else if (base === "G") {
			arrG.push(base);
		} else if (base === "C") {
			arrC.push(base);
		}
	}
}


function getNumberOf() {

	arrayGenerator();

	let numberA = arrA.length;
	let numberT = arrT.length;
	let numberG = arrG.length;
	let numberC = arrC.length;

	document.getElementById("a-prev").innerHTML = numberA;
	document.getElementById("t-prev").innerHTML = numberT;
	document.getElementById("g-prev").innerHTML = numberG;
	document.getElementById("c-prev").innerHTML = numberC;
}


function getPercOf() {

	let percentageA = arrA.length * 100 / sequence.length;
	let percentageT = arrT.length * 100 / sequence.length;
	let percentageG = arrG.length * 100 / sequence.length;
	let percentageC = arrC.length * 100 / sequence.length;

	document.getElementById("a-perc").innerHTML = percentageA.toFixed(3) + "%";
	document.getElementById("t-perc").innerHTML = percentageT.toFixed(3) + "%";
	document.getElementById("g-perc").innerHTML = percentageG.toFixed(3) + "%";
	document.getElementById("c-perc").innerHTML = percentageC.toFixed(3) + "%";
}


function getComplementary() {

	let complementary = [];

	for (let base of sequence) {
		if (base === "A") {
			complementary.push("T");
		} else if (base === "T") {
			complementary.push("A");
		} else if (base === "G") {
			complementary.push("C");
		} else if (base === "C") {
			complementary.push("G");
		}
	}

	document.getElementById("comp-seq").innerHTML = complementary.join("");
}


function reset() {

	document.getElementsByTagName("div").innerHTML = "";
	
	arrA.length = 0;
	arrT.length = 0;
	arrG.length = 0;
	arrC.length = 0;

	document.getElementById("a-prev").innerHTML = "";
	document.getElementById("t-prev").innerHTML = "";
	document.getElementById("g-prev").innerHTML = "";
	document.getElementById("c-prev").innerHTML = "";
	document.getElementById("a-perc").innerHTML = "";
	document.getElementById("t-perc").innerHTML = "";
	document.getElementById("g-perc").innerHTML = "";
	document.getElementById("c-perc").innerHTML = "";
	document.getElementById("dna-seq").innerHTML = "";
}


function start() {
	getNumberOf();
	getPercOf();
	getComplementary();
}


document.getElementById("start-but").addEventListener('click', start);
document.getElementById("reset-but").addEventListener('click', reset);