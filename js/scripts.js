function newItem() {
  // Adding new item to item list: 
  let li = $('<li></li>');
  let inputValue = $("input").val();

  // Crossing out an item, Adding delete button "X", and CLASS DELETE (DISPLAY: NONE) from css:
  if (inputValue === '') alert("You must write something!");
  else $('#list')
    .append(li
      .append(inputValue)
      .append(
        $(`<crossOutButton></crossOutButton>`)
          .append(document.createTextNode('X'))
          .on("click", function () { li.addClass("delete"); })
      )
      .on("dblclick", function () { li.toggleClass("strike"); })
    )
    .sortable();
}