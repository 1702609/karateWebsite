function loadPage(pageRequest) {
	if (pageRequest == "Kata"){
		window.open("/kata","_self"); 
	}
	else if (pageRequest == "Kumite"){
		window.open("/kumite","_self");
	}
	else if (pageRequest == "Kihon"){
		window.open("/kihon","_self");
	}
}
