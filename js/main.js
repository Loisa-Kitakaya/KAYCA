let rightMenu = document.getElementById("right-menu");
let leftMenu = document.getElementById("left-menu");

rightMenu.style.display = "none";
leftMenu.style.display = "none";

let activateRightMenu = document.getElementById("user-profile");
let deactivateRightMenu = document.getElementById("right-close-btn");
let activateLeftMenu = document.getElementById("user-menu");
let deactivateLeftMenu = document.getElementById("left-close-btn");

let deactivateMenu1 = document.getElementById("right-menu");
let deactivateMenu2 = document.getElementById("left-menu");

let logoText = document.getElementById("logo-text");

activateRightMenu.addEventListener("click", function() {
  $("#right-menu").fadeIn();
  $("#left-menu").fadeOut();
  $("#main").css({ opacity: "0.75" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "VOTER PROFILE";
});
deactivateRightMenu.addEventListener("click", function() {
  $("#right-menu").fadeOut();
  $("#main").css({ opacity: "1" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "KAYCA POLLS";
});
activateLeftMenu.addEventListener("click", function() {
  $("#left-menu").fadeIn();
  $("#right-menu").fadeOut();
  $("#main").css({ opacity: "0.75" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "WEB-APP MENU";
});
deactivateLeftMenu.addEventListener("click", function() {
  $("#left-menu").fadeOut();
  $("#main").css({ opacity: "1" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "KAYCA POLLS";
});

deactivateMenu1.addEventListener("click", function() {
  $("#right-menu").fadeOut();
  $("#left-menu").fadeOut();
  $("#main").css({ opacity: "1" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "KAYCA POLLS";
});

deactivateMenu2.addEventListener("click", function() {
  $("#right-menu").fadeOut();
  $("#left-menu").fadeOut();
  $("#main").css({ opacity: "1" });
  $("#menu_info").css({ opacity: "1" });
  $("#user_info").css({ opacity: "1" });
  logoText.innerHTML = "KAYCA POLLS";
});

window.addEventListener("scroll", scrollEvent);

function scrollEvent() {
  let scroll = window.scrollY;
  let scrollIn = document.getElementById("navigation-bar");

  if (scroll >= 75) {
    scrollIn.style.animation = "scrollEffectIn 500ms ease-out both";
    $("#navigation-bar").css({ "background-color": "#3a0e0e" });
    $("#navigation-bar").css({ "box-shadow": "0px 2px 10px black" });
  } else if (scroll < 75) {
    scrollIn.style.animation = "scrollEffectOut 100ms ease-in both";
    $("#navigation-bar").css({ "background-color": "initial" });
    $("#navigation-bar").css({ "box-shadow": "initial" });
  }
}
