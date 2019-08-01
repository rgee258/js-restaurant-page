function contactContent() {
  let tabbed = document.querySelector("#tabbed-content");
  tabbed.appendChild(contactDetails("Email", "jsbistro@fake.com"));
  tabbed.appendChild(contactDetails("Phone", "123-456-7890"));
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