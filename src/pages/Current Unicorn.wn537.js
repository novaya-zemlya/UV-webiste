// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
//TODO: make better integration for current unicorn  
$w.onReady(function () {
	console.log("If this doesnt work you can blame me -> Max :3");
	 $w("#subteamExpand-o-tron").onClick( () => {
		$w("#elec").expand();
		$w("#soft").expand();
		$w("#mech").expand();
		$w("#subteamExpand-o-tron").hide();

	 });

	 $w("#uniButton").onClick( () => {
		if($w("#fullUnicorn").collapsed){
			$w("#fullUnicorn").expand();
		}
		else{
			$w("#fullUnicorn").collapse();
		}
		
	 });


	 $w("#elecbutton").onClick( () => {
		if($w("#electext").collapsed){
			$w("#electext").expand();
		}
		else{
			$w("#electext").collapse();
		}
		
	 });

	 $w("#softbutton").onClick( () => {
		if($w("#softtext").collapsed){
			$w("#softtext").expand();
		}
		else{
			$w("#softtext").collapse();
		}
		
	 });

	$w("#mechButton").onClick( () => {
		if($w("#mechText").collapsed){
			$w("#mechText").expand();
		}
		else{
			$w("#mechText").collapse();
		}
		
	 });

});


