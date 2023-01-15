let dictionary = [];
let searchResult = document.getElementById("searchResult");

function addWord() {
  let word = document.getElementById("wordInput").value;
  if(dictionary.includes(word)){ // check if the word already exists in the dictionary
    return; // stops the execution of the function if the word already exists
  }
  dictionary.push(word); // add the word to the dictionary
  dictionary.sort(); // sort the words from the dictionary
  let list = document.getElementById("dictionary");
  list.innerHTML = ""; // delete the contents of the list
  for (let i = 0; i < dictionary.length; i++) { // scroll through the words in the dictionary
    let newItem = document.createElement("li"); // creates a list item for each word in the dictionary to display in the list.
    newItem.style.color = "white";
    newItem.innerHTML = dictionary[i]; // display the words from the dictionary
    list.appendChild(newItem);  // delete the contents of the list
  }
}

function searchWord() {
  let searchWord = document.getElementById("searchInput").value;
  if (dictionary.includes(searchWord)) {
    document.getElementById("status").style.color = "goldenrod";
    document.getElementById("status").innerHTML = "Status: The word exist in the dictionary! &#129299;";
  } else {
    document.getElementById("status").style.color = "goldenrod";
    document.getElementById("status").innerHTML = "Status: The word doesn't exist in the dictionary! &#128533;";
  }
}
