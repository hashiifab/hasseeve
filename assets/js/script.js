"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// handle form submit and reset
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const fullname = form.fullname.value;
  const email = form.email.value;
  const message = form.message.value;

  // Create mailto link
  const mailtoLink = `mailto:hashiif.abdillah@gmail.com?subject=Contact from ${fullname}&body=${message}`;

  // Open email client
  window.location.href = mailtoLink;

  // Reset form
  form.reset();

  return false;
}

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Fun console message
console.log("%c👋 Hey there, curious developer!", "font-size: 24px; font-weight: bold; color: #4CAF50;");

console.log(`%c
   ____  _                 _       
  |  _ \| | __ _ _   _  __| | ___  
  | |_) | |/ _\` | | | |/ _\` |/ _ \ 
  |  __/| | (_| | |_| | (_| | (_) |
  |_|   |_|\__,_|\__, |\__,_|\___/ 
                 |___/             
`, "color: #2196F3;");

console.log("%cWhat are you doing here? 🤔", "font-size: 20px; color: #FF5722;");
console.log("%cLooking for bugs? Or maybe you're just curious about how this site works? 🐞", "color: #9C27B0;");
console.log("%cWell, since you're here...", "font-style: italic; color: #607D8B;");
console.log("%cFun fact: This site was made with lots of ☕ and 💖", "font-size: 16px; color: #E91E63;");
console.log("%cPS: You found an easter egg! 🎉", "font-weight: bold; color: #FFC107;");
