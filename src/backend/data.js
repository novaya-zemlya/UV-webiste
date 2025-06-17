/***************
 backend/data.js
 ***************

 'backend/data.js' is a reserved Velo file that enables you to create data hooks.

 A data hook is an event handler (function) that runs code before or after interactions with your site's database collections. 
 For example, you may want to intercept an item before it is added to your collection to tweak the data or to perform a final validation.

 Syntax for functions:

  export function [collection name]_[action](item, context){}

 Example: 

  export function myCollection_beforeInsert(item, context){}

 ---
 More about Data Hooks: 
 https://support.wix.com/en/article/velo-about-data-hooks

 Using Data Hooks: 
 https://support.wix.com/en/article/velo-using-data-hooks

 API Reference: 
 https://www.wix.com/velo/reference/wix-data/hooks

***************/




// IT WORKS 

/**  BELOW IS CODE FOR FILTERING OUT HARMFUL WORDS, BE WARNED ALL HARMFUL WORDS ARE VISABLE BELOW **/
export function comments_beforeInsert(item, context) {
  const harmfulWordsRegex = /(Max Is A Bad Lead|shit|Max couldent code if maxs life was on the line|fuck|aadi was not a great mechinical lead|furries are not cute|aadi is not cute|suicide|Chris is not a good|jerk||)/i;

  const clean = (text) =>
    (text || "").toLowerCase().replace(/[^\w\s]/g, "");

  const cleanedWords = clean(item.words);// Comment
  const cleanedName = clean(item.Title); // Name

  console.log("Checking words:", cleanedWords);
  console.log("Checking username:", cleanedName);

  if (harmfulWordsRegex.test(cleanedWords)) {
    return Promise.reject("Comment contains harmful content you meanie");
  }

  if (harmfulWordsRegex.test(cleanedName)) {
    return Promise.reject("Name contains harmful content, at least i rlly hope thats not your name");
  }

  return Promise.resolve(item);
}


