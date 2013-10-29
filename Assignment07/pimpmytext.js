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

function snoopify(ctrlId){
    strText = $("#"+ctrlId).val().toUpperCase();
	if (strText.indexOf("-IZZLE.") < 0){
	  strText = strText.split(".").join("-izzle.");
	} 
	$("#"+ctrlId).val(strText);
}
