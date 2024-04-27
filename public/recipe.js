var icons = document.querySelectorAll('.add');
icons.forEach(function(icon) {
    icon.onclick = function() {
        icon.classList.toggle('active');
    }
});

  

const dishes =[];
var dishAll=document.querySelectorAll('.main a');
for(var i=0;i<dishAll.length;i++){

 dishes.push(dishAll[i].textContent);
}

  // Function to search dishes
  function searchDishes() {
    const searchInput = document.querySelector(".search-box").value.toLowerCase();
    const filteredDishes = dishes.filter(dish => dish.toLowerCase().includes(searchInput));
    displayDishes(filteredDishes);
  }

  // Function to display dishes
  function displayDishes(dishArray) {
    const dishList = document.getElementById("dishList");
    dishList.innerHTML = ""; // Clear existing list

    dishArray.forEach(dish => {
      const listItem = document.createElement("li");
      listItem.textContent = dish;
      dishList.appendChild(listItem);
    });
  }

  // Display all dishes initially
  displayDishes(dishes);


