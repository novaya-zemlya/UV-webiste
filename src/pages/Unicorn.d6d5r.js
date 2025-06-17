// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	 //Print hello world:
	 console.log("if this doesnt work you can (should) blame... me -> max :3");
	 
	 var a = -1;
	 

	 $w('#nothingToSeeHere').text = 'The Unicorn is the official Ultraviolet news letter. Containing updates from all sub-teams, details about major events and a general status report!    ';
	 $w('#nothingToSeeHere').onClick( ()=>{
		a++;
		if(a==0){
		$w('#nothingToSeeHere').text = 'Yeah, every so often we publish a news letter with all sorts of fun stuff. We put alot of work into it, so check it out?';
		}
		else if (a == 1){
			$w('#nothingToSeeHere').text = 'what are you still doing here?';
		}
		else if (a == 2){
			$w('#nothingToSeeHere').text = 'please? ＞︿＜';
		}
		else if (a == 3){
			$w('#nothingToSeeHere').text = 'Zip bomb in T- 5';
		}
		else {
			$w('#nothingToSeeHere').text = 'The Unicorn is the official Ultraviolet news letter. Containing updates from all sub-teams, details about major events and a general status report!    ';
			a = 0;
		
		}

	 });

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});