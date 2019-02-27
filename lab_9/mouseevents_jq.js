// JavaScript Document

$(function(){
	// usual main starting point when web page loads


	// use jquery to find the div with id button1
	// set the mouse enter and mouse leave functions, just like the onclick in the lecture
	// use the html attribute to set the text
	$("#button1").mouseenter(function(){
		$(this).html("<p>Thank You</p>");
	});

	$("#button1").mouseleave(function(){
		$(this).html("<p>Mouse Over Me</p>");
	});
	$("#button2").mouseup(function(){
		$(this).html("<p>Release Me</p>");
		$(this).css("background", "lightblue")
	});
	$("#button2").mousedown(function(){
		$(this).html("<p>Thank You</p>");
		$(this).css("background", "lightgreen")
	});

	// now you need to do the same for button1 for mouseleave
	// and mouseup, mousedown for button2

});
