
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#top');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#F89D0E');
       }
   });
    }
});
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#mid');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#1BAEE4');
       }
   });
    }
});
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#projects');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#F35F72');
       }
   });
    }
});
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#bottom');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#435196');
       }
   });
    }
});

$(document).ready(function() {

	// Show the first image
	$("#slider img").eq(0).show();

	// Set up our index variable
	var currentImageNumber = 0;

	// setInterval(function() {

	// 	// Hide the current image
	// 	$("#slider img").eq(currentImageNumber).hide();

	// 	// Increment our index variable
	// 	// currentImageNumber++;

	// 	// // Reset currentImageNumber
	// 	// if(currentImageNumber >= $("#slider img").length)
	// 	// {
	// 	// 	currentImageNumber = 0;
	// 	// }

	// 	currentImageNumber = (currentImageNumber + 1) % $("#slider img").length;

	// 	// Show the next image	
	// 	$("#slider img").eq(currentImageNumber).show();


	// }, 1000);

	$("#next").click(function() {

		// Hide the current image
		$("#slider img").eq(currentImageNumber).hide();

		// Increment our index variable
		// currentImageNumber++;

		// // Reset currentImageNumber
		// if(currentImageNumber >= $("#slider img").length)
		// {
		// 	currentImageNumber = 0;
		// }

		currentImageNumber = (currentImageNumber + 1) % $("#slider img").length;

		// Show the next image	
		$("#slider img").eq(currentImageNumber).show();


	});

	$("#prev").click(function() {
		// Hide the current image
		$("#slider img").eq(currentImageNumber).hide();

		// Increment our index variable
		// currentImageNumber++;

		// // Reset currentImageNumber
		// if(currentImageNumber >= $("#slider img").length)
		// {
		// 	currentImageNumber = 0;
		// }

		currentImageNumber = (currentImageNumber - 1) % $("#slider img").length;

		// Show the next image	
		$("#slider img").eq(currentImageNumber).show();



	});


});

