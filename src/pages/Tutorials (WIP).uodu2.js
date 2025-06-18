import wixData from 'wix-data';


// collapse all but the wanted section (a better way to do this prob exists)
function expandCollapse(params){
    $W('#elecTut').collapse();
    $W('#mechTut').collapse();
    $W('#softTut').collapse();
    $W('#adminTut').collapse();
    $W(params).expand();

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
    $W('#softTut').expand();

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
});
