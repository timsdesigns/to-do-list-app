(function () {
  $("#input").focus();
  $("form").on("submit", function (e) {
    e.preventDefault();
    newItem();
  });
  $("#addBtn").on("click", newItem)

  // Attach handlers to buttons
  $("#copyBtn").on("click", clipBoard);
  $("#copyBtn").on("keypress", function (e) { if (e.key === "Enter") clipBoard(); });

  $("#clearBtn").on("click", function clearList() { $("#list").empty(); });

  function newItem() {
    // Adding new item to item list: 
    let li = $('<li></li>');
    let inputValue = $("input").val();
    // Crossing out an item, Adding delete button "X", and CLASS DELETE (DISPLAY: NONE) from css:
    if (inputValue === '') alert("You must write something!");
    else $('#list').append(li
      .append(inputValue)
      .append(
        $(`<crossOutButton></crossOutButton>`)
          .append(document.createTextNode('X'))
          .on("click", function () { li.remove(); })
      ).on("dblclick", function () { li.toggleClass("strike"); })
    ).sortable(); // Enable dragging
    $("input").val(""); // Clear input
  }

  function clipBoard() {
    // Check if the list is empty
    if ($("#list li").length === 0) {
      console.log("List empty, nothing copied.");
      return;
    }
    var listText = "";
    $("#list li") /* Sel all list items */
      .each(function (i, element) {
        // Filter out their text nodes, append to string
        listText += $(element)
          .contents()
          .filter(function () { return this.nodeType == Node.TEXT_NODE; })
          .text() + "\n";
      });
    // Use Clipboard API's method to write listText to clipboard
    navigator.clipboard.writeText(listText).then(function () {
      console.log('Copying to clipboard was successful!'); // If successful, log success
    }, function (err) {
      console.error('Could not copy text: ', err); // If fails, log error
    });
  }
})();