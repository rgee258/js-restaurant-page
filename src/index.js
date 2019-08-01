import { setup } from './load.js';
import { homeContent } from './home.js';
import { menuContent } from './menu.js';
import { contactContent } from './contact.js';

function getHome() {
  console.log("Run");
  removeActive();
  clearTabbed();
  homeContent();
  document.querySelector("#home").classList.add("active");
  document.querySelector("#menu").addEventListener("click", getMenu);
  document.querySelector("#contact").addEventListener("click", getContact);
}

function getMenu() {
  removeActive();
  clearTabbed();
  menuContent();
  document.querySelector("#menu").classList.add("active");
  document.querySelector("#home").addEventListener("click", getHome);
  document.querySelector("#contact").addEventListener("click", getContact);
}

function getContact() {
  removeActive();
  clearTabbed();
  contactContent();
  document.querySelector("#contact").classList.add("active");
  document.querySelector("#home").addEventListener("click", getHome);
  document.querySelector("#menu").addEventListener("click", getMenu);
}

function removeActive() {
  let active = document.querySelector(".active");
  active.classList.remove("active");
}

function clearTabbed() {
  let tabbed = document.querySelector("#tabbed-content");
  // Remove all current nodes in the tabbed area
  while (tabbed.firstChild) {
    tabbed.firstChild.remove();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    setup();
    getHome();
});