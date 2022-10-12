const menuBtn = document.querySelector(".menuBtn");
const menuIcon = document.querySelector(".menuBtn img");
const navList = document.querySelector(".nav-list");

//| toggle Menu
let toggle = true;

menuBtn.addEventListener("click", () => {
  toggle = !toggle;
  toggle == false
    ? (menuIcon.src = "./images/icon-close-menu.svg")
    : (menuIcon.src = "./images/icon-hamburger.svg");

  document.body.classList.toggle("overlay-active");
  navList.classList.toggle("active");
});

//| toggle back this page content

const radios = [...document.querySelectorAll(".radioBtn")];
const cards = [...document.querySelectorAll(".rewards-list .card")];
console.log(cards);
radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    // cards[index].classList.add("active-back-this-project-card");
    radio.parentNode.parentNode.classList.add("active-back-this-project-card");

    radios
      .filter((item) => {
        return item != radio;
      })
      .forEach((item) => {
        item.checked = false;
        item.parentNode.parentNode.classList.remove(
          "active-back-this-project-card"
        );
      });
    if (index == 0) {
      window.scrollTo(0, 0);
      backThisProjectModal.classList.toggle("active");
      completeModal.classList.add("active-flex");
    }
  });
});

// open & close Modal by the corresponding buttons
const backThisProjectBtn = document.querySelector(".backBtn");
const backThisProjectModal = document.querySelector(".back-this-project");
const closeModalBtn = document.querySelector(".close-modalBtn");
[backThisProjectBtn, closeModalBtn].forEach((el) => {
  el.addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.body.classList.toggle("overlay-active");
    backThisProjectModal.classList.toggle("active");
  });
});

// Open modal by reward buttons
const rewardBtns = [...document.querySelectorAll(".rewardBtn")];
console.log(rewardBtns);
rewardBtns.forEach((rewardBtn) => {
  rewardBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.body.classList.toggle("overlay-active");
    backThisProjectModal.classList.toggle("active");
  });
});

//? you can also use this code to toggle 'back this project' modal

// closeModalBtn.addEventListener("click", () => {
//   document.body.classList.remove("overlay-active");
//   backThisProjectModal.classList.remove("active");
// });

//| toggle Complete Modal

const continueBtn = [...document.querySelectorAll(".continueBtn")];
const gotitBtn = document.querySelector(".gotitBtn");
const completeModal = document.querySelector(".completed-modal");

continueBtn.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);
    backThisProjectModal.classList.toggle("active");
    completeModal.classList.add("active-flex");
  });
});

gotitBtn.addEventListener("click", () => {
  window.location.reload();
});

// Bookmark button

const bookmarkBtn = document.querySelector(".bookmarkBtn");

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.children[1].innerText = "Bookmarked";
  bookmarkBtn.classList.add("active-bookmark");
});
