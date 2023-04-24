import { gsap } from "gsap";
import Swup from "swup";

const swup = new Swup({
  containers: ["#swup"],
});

// custom cursor

document.addEventListener("DOMContentLoaded", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1,
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px",
    });
  };

  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0,
    });
    initCursor = false;
  };
});

// // empêcher le comportement par défaut lorsqu'un lien est cliqué
// document.querySelector("#my-link").addEventListener("click", function (event) {
//   event.preventDefault();

//   // charger la page suivante après un délai de 2 secondes
//   setTimeout(function () {
//     window.location.href = event.target.href;
//   }, 8000);
// });

// const navmenu = document.querySelector("#nav-menu");
// const clickme = document.querySelector("#clickme");

// navmenu.addEventListener("click", () => {
//   navmenu.disabled = true;
//   clickme.classList.remove("d-none");
// });

// link.addEventListener("click", () => {
//   navmenu.disabled = false;
//   clickme.classList.add("d-none");
// });

var menuText = document.getElementById("menu");
var menuImage = document.querySelector(".menu-button img");

menuText.addEventListener("mouseover", function () {
  menuImage.style.transform += "rotate(90deg)";
});

menuText.addEventListener("mouseleave", function () {
  menuImage.style.transform += "rotate(-90deg)";
});

// menu

// window.openNavMenu = function openNavMenu() {
//   console.log("ewnrownj");
//   var menuNav = document.getElementById("nav-menu");
//   var opacity = menuNav.style.opacity;
//   console.log(opacity);
//   if (opacity == 1) {
//     menuNav.style.opacity = 0;
//   } else {
//     menuNav.style.opacity = 1;
//   }
// };

window.openNavMenu = function openNavMenu() {
  console.log("ewnrownj");
  var menuNav = document.getElementById("nav-menu");
  var opacity = menuNav.style.opacity;
  console.log(opacity);
  menuNav.style.transition = "all .5s";
  menuNav.style.opacity = opacity == 1 ? 0 : 1;
  // if else simplifié
};
