function menuContent() {
  let tabbed = document.querySelector("#tabbed-content");
  let dishHeader = document.createElement("h3");
  dishHeader.classList.add("menu-header");
  dishHeader.innerText = "Dishes";
  tabbed.appendChild(dishHeader);
  tabbed.appendChild(menuItem("Tonkotsu Ramen", "$10.00"));
  tabbed.appendChild(menuItem("Shoyu Ramen", "$10.00"));
  tabbed.appendChild(menuItem("Miso Ramen", "$10.00"));
  tabbed.appendChild(menuItem("Salmon Bowl", "$12.00"));
  tabbed.appendChild(menuItem("Tuna Bowl", "$12.00"));
  tabbed.appendChild(menuItem("Yellowtail Bowl", "$12.00"));
  tabbed.appendChild(menuItem("Stir Fry Eggplant and Green Beans", "$13.00"));
  tabbed.appendChild(menuItem("Mixed Fried Noodles", "$12.00"));
  tabbed.appendChild(menuItem("Beef Chow Fun", "$13.00"));
  tabbed.appendChild(menuItem("Salted Pork Congee", "$10.00"));
  tabbed.appendChild(menuItem("Wonton Noodles", "$10.00"));
  tabbed.appendChild(menuItem("Seafood Laksa", "$11.00"));
  tabbed.appendChild(menuItem("Chicken Laksa", "$11.00"));
  let drinkHeader = document.createElement("h3");
  drinkHeader.classList.add("menu-header");
  drinkHeader.innerText = "Drinks";
  tabbed.appendChild(drinkHeader);
  tabbed.appendChild(menuItem("Soda", "$1.50"));
  tabbed.appendChild(menuItem("Milk Tea", "$1.50"));
  tabbed.appendChild(menuItem("Ramune", "$2.50"));
  tabbed.appendChild(menuItem("Tsingtao", "$3.00"));
  tabbed.appendChild(menuItem("Asahi Super Dry", "$3.00"));
}

function menuItem(name, price) {
  let item = document.createElement("div");
  item.classList.add("menu-item");
  let dish = document.createElement("p");
  dish.classList.add("dish");
  dish.innerText = name;
  let cost = document.createElement("p");
  cost.classList.add("cost");
  cost.innerText = price;
  item.appendChild(dish);
  item.appendChild(cost);

  return item;
}

export {
  menuContent
}