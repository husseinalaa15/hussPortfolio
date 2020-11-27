



/*audio player*/
audioPlayer();
function audioPlayer(){
	var currentSong=0;
	$("#audioPlayer")[0].src = $("#playlist li a ")[0];
	$("#audioPlayer")[0].play();
	$("#playlist li a ").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this;
		$("#audioPlayer")[0].play();
		$("#playlist li").removeClass("current-song");
		currentSong= $(this).parent().index();
		$(this).parent().addClass("current-song");
	});
	$("#audioPlayer")[0].addEventListener("ended",function(){
		currentSong++;
		if(currentSong == $("#playlist li a").length)
			currentSong = 0;
		$("#playlist li ").removeClass("current-song");
		$("#playlist li:eq("+currentSong+")").addClass("current-song");
		$("#audioPlayer")[0].src= $("#playlist li a ")[currentSong].href;
				$("#audioPlayer")[0].play();

	});
	
	/* Audio Hover JS  . 
	var myAudio = document.getElementById('audioPlayer'),
	myHover = document.getElementById('playlist');

	myAudio.onmouseover= function(){
		"use strict "; 
		myHover.style.display="inline";
	}
		myHover.onmouseover= function(){
		"use strict "; 
		myHover.style.display="inline";
	}
		myHover.onmouseout= function(){
		"use strict "; 
		myHover.style.display="none";
	}
	*/


/*
	audio hover Jquery 
*/


	$("#music").click(
	function(){
		$("#audioPlayer").fadeToggle(1000,),$("#playlist").fadeToggle(1000,);
	}
	);

};


/**/
	


	/*function myFunction() {
 myContent.children[1].style.background = "#0f3460";
 myContent.children[2].style.color = "#0f3460";
 myContent.children[3].style.color = "#1a1a2e";

}*/

function start(){
	'use strict';
	$("#video").slideUp();

};
/*hide Header*/
var video = document.getElementById('video');

var startB= document.getElementById('start');
/*hide after 10000ms even if udidnt click */
var hide = setTimeout(start,10000);
/*hide when click */
/*
 hide when click using JS .
startB.onclick = function  (){
	'use strict ';
	clearTimeout(hide);
	video.style.display="none";
};*/

$("#start").click(function(){
	$("#video").slideUp("slow", );

})





/*		SCROLL Button To Top		*/



$("#scroll").click(function(){
 $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");;
})


$("#music").click(function(){
	$("#music").css("transform","rotate(360deg)");

});






	







var myDiv = document.getElementById('as');







/*		el dark mode 	*/
const checkbox= document.getElementById('checkbox');
	checkbox.addEventListener('change', ()=> {
		document.body.classList.toggle('dark');
		});



