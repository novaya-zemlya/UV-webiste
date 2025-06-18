
console.log('yeah yeah, you know who to blame, same as for the unicorn');
console.log('The comment filter is a work in progress, please dont abuse or i lose my job - max :3');
import wixData from 'wix-data';
let options = {
  suppressHooks: false // this should not be needed, it just makes sure the the backend hook is not turned off
};
// DOES NOT WORK YET I WILL FIX - Max

//still not working; i am still on it - Max 6/14/25


// okay its a backend issue still on it - Max 6/15/25

// IT WORKS!!!!!!
// yey - Chris 6/15/2025

// As this is now the log, added small explantion to stuff for if i can no longer work on this and someone else has to take over, also connected to git - Max 15:28 17/6/25
// testing git / vs intagration 18/6/25





function getData(params) {
    let query = wixData.query('comments');

    // this works now without having to refresh the page :3 (thanks velo yt)
    return query.limit(1000).find().then(results => {
        console.log('getData', results);
        return results.items;
    });

}

$w.onReady(() => {
  $w("#go").onClick(async () => {
    const comment = $w("#meat").value;
    const name = $w("#name").value;

    // Set both fields in the dataset
    $w("#commentsWrite").setFieldValue("words", comment); // comment
    $w("#commentsWrite").setFieldValue("Title", name); // name

    try {
      await $w("#commentsWrite").save();  // Triggers beforeInsert otherwise it dont work for some reason idkk
      console.log("Comment saved"); // maybe at some point get rid of this? i dont think anyone but me checks logs but, this will get cluttered, kinda like the comment (note to self i guess). me (the one the only maxfoxx[yeah maxfox was taken]): is there a limit to how long this line can be? \n also me: i am way to lazy to find out and 2 dumb to look it up.
    } catch (err) {
      console.error("Save failed:", err.message);
    }

    // Refresh the comment list
    getData().then(items => {
      $w("#commentsList").data = items;
    });
  });
});


// unfiltered comments
/*
$w.onReady(() => {

    $w('#commentsWrite').onAfterSave(() => {
        getData().then((items) => {
            $w('#commentsList').data = items;
        });
    });

});

*/


