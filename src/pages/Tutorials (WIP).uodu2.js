// TODO: Make videos stop when collapsed, .collapsed logic?

import wixData from 'wix-data';


//REVIEW: collapse all but the wanted section (a better way to do this prob exists)
function expandCollapse(params){
    $w('#elecTut').collapse();
    $w('#mechTut').collapse();
    $w('#softTut').collapse();
    $w('#adminTut').collapse();
    $w(params).expand();

}

//REVIEW - there has got to be a better/ cleaner way to do this
// id is the video id, and empty is if the video should be playing (ex: $w('videothing').html=fomatVideo('videoId',false); <- this would create the video)
/*function formatVideo(id, empty){
  if (!empty){
    return ` 
<style>
.video-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}
.video-container:hover {
  transform: scale(1.03);
}
</style>

<div class="video-container">
  <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/` + id + `"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</div>
`;
  }
  else return "";
}
*/


function formatVideo(id, empty){
  if (!empty){
    return `
<div style="border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: transform 0.3s ease;">
  <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/${id}"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</div>
`;
  } else return "";
}

$w.onReady(() => {





  $w("#adminGo").onClick(async () => {
    expandCollapse('#adminTut'); // close others


    const itemId = "0605e0d3-c0d5-4a23-a757-37e5e8cc7252"; // id of the admin item, if cms is changed this must also change, dont forget future me (or anyone else)
    try {
      
      const item = await wixData.get("hits", itemId); // get the item from the collection

      
      item.Number = (item.Number || 0) + 1; // hits ++

      
      const updatedItem = await wixData.update("hits", item); // call the update 

      console.log("Updated number:", updatedItem.number);
    } catch (err) {
      console.error("Failed to update item:", err.message);
   
    }
  });



  $w("#elecGo").onClick(async () => {

    expandCollapse('#elecTut');

    const itemId = "64e0a010-a87e-4b59-a0ff-c60d713e6181"; // id of the elec item, if cms is changed this must also change, dont forget future me (or anyone else)
    try {
      
      const item = await wixData.get("hits", itemId); // get the item from the collection

      
      item.Number = (item.Number || 0) + 1; // hits ++

      
      const updatedItem = await wixData.update("hits", item); // call the update 

      console.log("Updated number:", updatedItem.number);
    } catch (err) {
      console.error("Failed to update item:", err.message);
   
    }
  });

  $w("#softGo").onClick(async () => {
    

    expandCollapse('#softTut');

    const itemId = "1fd7dae1-a4e0-4b18-a849-86b385c90711"; // id of the soft item, if cms is changed this must also change, dont forget future me (or anyone else)
    try {
      
      const item = await wixData.get("hits", itemId); // get the item from the collection

      
      item.Number = (item.Number || 0) + 1; // hits ++

      
      const updatedItem = await wixData.update("hits", item); // call the update 

      console.log("Updated number:", updatedItem.number);
    } catch (err) {
      console.error("Failed to update item:", err.message);
   
    }
  });

  $w("#mechGo").onClick(async () => {

    expandCollapse('#mechTut');


    const itemId = "749e1974-eae9-40e8-b379-48b1eee2b381"; // id of the mech item, if cms is changed this must also change, dont forget future me (or anyone else)
    try {
      
      const item = await wixData.get("hits", itemId); // get the item from the collection

      
      item.Number = (item.Number || 0) + 1; // hits ++

      
      const updatedItem = await wixData.update("hits", item); // call the update 

      console.log("Updated number:", updatedItem.number);
    } catch (err) {
      console.error("Failed to update item:", err.message);
   
    }
  });
//TODO - condense this, its not scaleable
  $w("#adminTut").onCollapse(() => {
    $w("#adminVid").html = formatVideo("", true);
  });
  $w("#mechTut").onCollapse(() => {
    $w("#mechVid").html = formatVideo("", true);
  });
  $w("#elecTut").onCollapse(() => {
    $w("#elecVid").html = formatVideo("", true);
  });
  $w("#softTut").onCollapse(() => {
    $w("#softVid").html = formatVideo("", true);
  });


  $w("#adminTut").onExpand(() => {
    $w("#adminVid").html = formatVideo("Jmmzl52EphU", false);
  });
  $w("#mechTut").onExpand(() => {
    $w("#mechVid").html = formatVideo("Bb0bWjn-CaI", false);
  });
  $w("#elecTut").onExpand(() => {
    $w("#elecVid").html = formatVideo("451XC5PigRY", false);
  });
  $w("#softTut").onExpand(() => {
    $w("#softVid").html = formatVideo("g-Vv4ouvzRU", false);
  });

  
});
