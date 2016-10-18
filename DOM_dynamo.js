/*------------------------
RUN CODE WHEN ELEMENT EXISTS
used for dynamically added content
Based on the work by David Walsh and Daniel Buchner https://davidwalsh.name/detect-node-insertion
------------------------*/
var On_Element_Ready = function(id, callback){
	if ( document.getElementById(id) ){
		callback(); //if element is already loaded, don't set a listener
	}else{
		
		//use existing stylesheet or create a new one if one doesn't exist already
		var style = document.getElementById("dynamic-node-insert-detection-css") || 
			(function(){
				var style = document.createElement("style");
				style.id = "dynamic-node-insert-detection-css";
				style.setAttribute( "media", "screen" );
				style.setAttribute("data-dynamic-origin-comment", "Item dynamically added with javascript");
				style.appendChild( document.createTextNode("") );
				document.head.appendChild(style);
				return style;
			})();
		
		//add all prefixes to the animation rules
		var Prefix = function(str){
			var returnStr = "";
			var prefixList = ["", "-o-", "-ms-", "-webkit-"];
			for ( x in prefixList ){
				returnStr += prefixList[x] + str;
			}
			return returnStr
		};
		
		//add our new rules to this stylesheet
		style.sheet.insertRule("#" + id + "{"+
			Prefix("animation-duration: 0.001s;")+
			Prefix("animation-name: nodeInserted;")+
			"}", 0
		);
		
		//set up the callback for when the animation runs
		insertListener = function(event){
			if (event.animationName == "nodeInserted") {
				if (event.target.id == id){
					callback();
				}
			}
		}
		
		//wait for 'nodeInserted' animation to run
		document.addEventListener("animationstart", insertListener, false); // standard + firefox
		document.addEventListener("MSAnimationStart", insertListener, false); // IE
		document.addEventListener("webkitAnimationStart", insertListener, false); // Chrome + Safari
	}
}