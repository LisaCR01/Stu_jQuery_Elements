// Target the parent div element
const parentDivContainer = $('#root')
console.log(parentDivContainer);

//create a paragraph element
const pElement = $('<p>');
console.log(pElement)

//assign text to p element
pElement.text('~Carol Dweck');

//set class attribute to p element
pElement.addClass('plain');

//create h1 element
const h1Element = $('<h1>');

//assign text to h1
h1Element.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.');

//set class attribute to h1 element
h1Element.addClass('fancy')

//append elements to parent div container
//for append to have child first then child
h1Element.appendTo(parentDivContainer);
pElement.appendTo(parentDivContainer)

/*
for append have parent first then element
parentDivContainer.append(h1Element)
parentDivContainer.append(pElement)
*/

