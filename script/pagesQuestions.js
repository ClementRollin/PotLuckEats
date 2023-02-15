var list = document.getElementById("mobile-list");

list.addEventListener("click", function(event) {

  var selectedItem = event.target;
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("selected");
  }

  selectedItem.classList.add("selected");
  console.log("Option sélectionnée : " + selectedItem.innerHTML);
});

const arrow = document.getElementById('arrow');
  arrow.addEventListener('click', function() {
});

const listItems = document.querySelectorAll('#mobile-list li');
  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      arrow.style.display = 'block';
    });
});