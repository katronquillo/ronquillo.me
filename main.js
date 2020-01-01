function init() {
  let burger = document.getElementById("navbarBurger");
  burger.onclick = toggleBurger;
}

function toggleBurger() {
  let navMenu = document.getElementById("navbarMenuHeroB");

  if (this.classList.toggle("is-active")) { // To open burger
    navMenu.classList.add("is-active");
  }
  else { // To close burger 
    navMenu.classList.remove("is-active");
  }

}
