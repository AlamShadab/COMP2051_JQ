/**
 * @authors Jorge Quiroga and Jorge Rodriguez
 */

function pimpify(ctrlId) {
	$("#" + ctrlId).css("font-size", "24pt");
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
