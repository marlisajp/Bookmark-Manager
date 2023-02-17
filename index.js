//# Phase 2: JS
// todo 1.  declare an empty erray to hold the bookmarks
let bookmarkArr = [];

// todo 2.  get dom elements from html
let linkInput = document.getElementById("link-input");
let nameInput = document.getElementById("name-input");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("bookmark-list");

// todo 3. render(): list of bookmarks in <ul>
function render(link, name) {
  // create li element
  let li = document.createElement("li");
  li.setAttribute("class", "listItem");
  // set li html to display link name and add a remove button
  li.innerHTML = `
        <a href = ${link}>${name}</a>
        <button class = "removeBtn">remove</button>`;
  // append li element to <ul>
  list.appendChild(li);
}

// todo 4. addBtn event listener: adds bookmark to array when clicked
addBtn.addEventListener("click", function () {
  // get text input
  let linkInputText = linkInput.value;
  let nameInputText = nameInput.value;
  // create empy object
  let linkNameObj = {};
  // push link & name object into array
  linkNameObj[linkInputText] = nameInputText;
  bookmarkArr.push(linkNameObj);
  console.log(bookmarkArr);
  // re-render
  render(linkInputText, nameInputText);
});

// todo 5. removeBtn event listener: remove bookmark from array <ul> and rerender the list when clicked
// removeBtn.addEventListener("click", function(){
//     // remove object from array (slice/pop)
//     bookmarkArr.pop()
//     // remove list item from <ul>

//     // rerender list
// })
