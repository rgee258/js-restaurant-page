function contactContent() {
  let tabbed = document.querySelector("#tabbed-content");
  tabbed.appendChild(locationDetails("Lower NYC", "1 Lower Street", "New York City, NY 10001", "Mon - Sun", "10AM - 11PM"));
  tabbed.appendChild(locationDetails("Times Square NYC", "1 Times Street", "New York City, NY 10036", "Mon - Sun", "10AM - 11PM"));
  tabbed.appendChild(contactDetails("Email", "jsbistro@fake.com"));
  tabbed.appendChild(contactDetails("Phone", "123-456-7890"));
}

function locationDetails(site, street, city, days, hours) {
  let location = document.createElement("div");
  location.classList.add("location");
  let locationSite = document.createElement("h3");
  locationSite.classList.add("location-site");
  locationSite.innerText = site;
  let locationStreet = document.createElement("h4");
  locationStreet.classList.add("location-street");
  locationStreet.innerText = street;
  let locationCity = document.createElement("h4");
  locationCity.classList.add("location-city");
  locationCity.innerText = city;
  let locationDays = document.createElement("h4");
  locationDays.classList.add("location-days");
  locationDays.innerText = days;
  let locationHours = document.createElement("h4");
  locationHours.classList.add("location-hours");
  locationHours.innerText = hours;
  location.appendChild(locationSite);
  location.appendChild(locationStreet);
  location.appendChild(locationCity);
  location.appendChild(locationDays);
  location.appendChild(locationHours);

  return location;
}

function contactDetails(type, info) {
  let contact = document.createElement("div");
  contact.classList.add("contact");
  let contactType = document.createElement("h3");
  contactType.classList.add("contact-method");
  contactType.innerText = type;
  let contactInfo = document.createElement("h4");
  contactInfo.classList.add("contact-info");
  contactInfo.innerText = info;
  contact.appendChild(contactType);
  contact.appendChild(contactInfo);

  return contact;
}

export {
  contactContent
}