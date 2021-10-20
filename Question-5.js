/** 

* Returns the header element. 

* 

* @return {(object|null)} The JQuery header element or null if the element does not exist 

*/

function getHeaderElement() {
  // Get header element by its id.

  var header = $("#myHeader");

  if (header === null && typeof header === undefined) {
    console.log("header element exist!");
  } else {
    console.log("header element does not exist!");

    return header;
  }
}
