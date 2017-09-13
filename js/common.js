

        function draw(){
  	   // Get the canvas element form the page
	   var canvas = document.getElementById("canvas");

	   // Make a 2D context
	   var ctx = canvas.getContext("2d");

	   //resize the canvas to occupy the full page

	  // Get the widow width and height 
          var W = window.innerWidth;
	  var H = window.innerHeight;

	   // Set the same to the canvas
           canvas.width = W;
	   canvas.height = H; 
           ctx.fillstyle ='black'
	   ctx.fillRect(0,0,W,H);

           ctx.fillStyle = '#f00';
	   ctx.font = 'italic bold 30px sans-serif';
	   ctx.textBaseline = 'bottom';
	   ctx.fillText('Welcome! Let the fun begin!', 50, 100);
        }