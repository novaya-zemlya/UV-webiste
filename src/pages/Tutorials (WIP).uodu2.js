import wixData from 'wix-data';

$w.onReady(() => {
  $w("#adminGo").onClick(async () => {
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
});
