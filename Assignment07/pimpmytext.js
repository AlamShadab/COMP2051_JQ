/**
 * @authors Jorge Quiroga and Jorge Rodriguez
 */

var growing = false;
var interv;

function growText(ctrlId){
	if (!growing){
		interv = setInterval(pimpify(ctrlId), 500);
		growing = true;
	}else{
		clearInterval(interv);
		growing = false;
	}
}

function pimpify(ctrlId) {
	var fontSize = parseFloat(parseFloat($("#" + ctrlId).css("font-size"))*72/96).toFixed(2);
	if (fontSize == undefined || fontSize < 24){
	    $("#" + ctrlId).css("font-size", "24pt");
	}else{
		$("#" + ctrlId).css("font-size", (parseInt(fontSize)+2) + "pt");
	}
	growText(ctrlId);
}

function blinging(ctrlId, bolder) {
	if (bolder) {
		//		$("#"+ctrlId).css("font-weight","bold");
		$("#" + ctrlId).css({"color": "green","text-decoration":"underline"});
	} else {
		//		$("#"+ctrlId).css("font-weight","normal");
		$("#" + ctrlId).css({"color": "black","text-decoration":"none"});
	}
}

function setBackground(setBackGrnd){
	if (setBackGrnd){
		$("body").css("background-image","url('./background.jpg')");
	}else{
		$("body").css("background-image","none");
	}
}

function snoopify(ctrlId){
    strText = $("#"+ctrlId).val().toUpperCase();
	if (strText.indexOf("-IZZLE.") < 0){
	  strText = strText.split(".").join("-izzle.");
	} 
	$("#"+ctrlId).val(strText);
}

function pigLatVowel(word){
	return word+"-ay";
}

function pigLatCons(word){
	var isVowel = false;
	var i=0;
	var consCluster = "";
	var tempStr = word.toLowerCase();
	while (!isVowel){
		switch (tempStr[i]){
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
			  isVowel = true;
			break;
			default:
			  consCluster += tempStr[i];
	    }
	    i++;
	}
	return word.substr(i-1, word.length)+consCluster+"-ay";
}

function latinify(ctrlId){
	var arrWords = $("#"+ctrlId).val().split(" ");
	for (var i=0; i<arrWords.length; i++){
		switch (arrWords[i].charAt(0).toLowerCase()){
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
			  arrWords[i] = pigLatVowel(arrWords[i]);
			break;
			default:
			  arrWords[i] = pigLatCons(arrWords[i]);
		}
	}
	$("#"+ctrlId).val(arrWords.join(" "));
}
