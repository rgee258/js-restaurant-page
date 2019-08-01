import { homeContent } from './home.js';

function setup() {
  let content = document.querySelector("#content");
  content.appendChild(mainHeader());
  content.appendChild(navigation());
  content.appendChild(tabbedContent());
}

function mainHeader() {
  let header = document.createElement("header");
  header.classList.add("main-header");
  let headerText = document.createElement("h1");
  headerText.innerText = "JS Asian Bistro";
  header.appendChild(headerText);

  return header;
}

function navigation() {
  let nav = document.createElement("nav");
  let navList = document.createElement("ul");
  let navs = ["Home", "Menu", "Contact"];
  for (let i = 0; i < navs.length; i++) {
    let navNode = document.createElement("li");
    navNode.innerText = navs[i];
    if (i == 0) {
      navNode.classList.add("tab");
      navNode.id = "home";
      navNode.classList.add("active");
    }
    else if (i == 1) {
      navNode.classList.add("tab");
      navNode.id = "menu";
    }
    else if (i == 2) {
      navNode.classList.add("tab");
      navNode.id = "contact";
    }
    navList.appendChild(navNode);
  }
  nav.appendChild(navList);

  return nav;
}

function tabbedContent() {
  let tabbed = document.createElement("div");
  tabbed.id = "tabbed-content";

  return tabbed;
}

export {
  setup
}