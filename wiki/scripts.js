function changeText(){
	var text = document.getElementById("toggleNav");
	
    if (text.hasAttribute("aria-expanded", "false")) {
        text.setAttribute("value", "show");
    }
	else 
	if (text.hasAttribute("aria-expanded", "true")) {
		text.setAttribute("value", "hide");
	}
}

$(document).ready(function(){
	$("#toggleNav").click(function(){
    $("input#toggleNav").attr("value","show");
	});
}); 

jQuery(function($) {
	$(document).ready(function(){
		$("input#toggleNav").click(function(){
			$("input#toggleNav").attr("value","show");
		});
	}); 
});