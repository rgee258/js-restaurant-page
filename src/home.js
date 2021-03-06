import curry from './images/curry.jpg';
import ramen from './images/ramen.jpg';
import stirfry from './images/stirfry.jpg';
import sushi from './images/sushi.jpg';

function homeContent() {
  let tabbed = document.querySelector("#tabbed-content");
  tabbed.appendChild(foodContent(1, curry, ramen))
  tabbed.appendChild(recommendContent());
  tabbed.appendChild(foodContent(2, stirfry, sushi))
}

function foodContent(count, imageOnePath, imageTwoPath) {
  let display = document.createElement("div");
  display.classList.add("food-" + count);
  let firstImage = document.createElement("img");
  firstImage.src = imageOnePath;
  let secondImage = document.createElement("img");
  secondImage.src = imageTwoPath;
  display.appendChild(firstImage);
  display.appendChild(secondImage);

  return display;
}

function recommendContent() {
  let recommendation = document.createElement("header");
  recommendation.classList.add("recommendation");
  let quote = document.createElement("h3");
  quote.innerText = "\"" + "Simply delectable. Would recommend for anyone in the area if they don't want to miss out on one of the best dining experiences." + "\"";
  let author = document.createElement("h4");
  author.innerText = "- Food Is Life Magazine";
  recommendation.appendChild(quote);
  recommendation.appendChild(author);

  return recommendation;
}

export {
  homeContent
}