let rightMenu = document.getElementById("right-menu");
let leftMenu = document.getElementById("left-menu");

rightMenu.style.display = "none";
leftMenu.style.display = "none";

let activateRightMenu = document.getElementById("user-profile");
let deactivateRightMenu = document.getElementById("right-close-btn");
let activateLeftMenu = document.getElementById("user-menu");
let deactivateLeftMenu = document.getElementById("left-close-btn");

let deactivateMenus = document.getElementById("main");

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

deactivateMenus.addEventListener("click", function() {
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
    scrollIn.style.animation = "scrollEffectIn 100ms ease-out both";
    $("#navigation-bar").css({ "background-color": "#0e1d3a" });
    $("#navigation-bar").css({ "box-shadow": "0px 2px 10px black" });
  } else if (scroll < 75) {
    scrollIn.style.animation = "scrollEffectOut 100ms ease-in both";
    $("#navigation-bar").css({ "background-color": "initial" });
    $("#navigation-bar").css({ "box-shadow": "initial" });
  }

  if (scroll >= 75) {
    $(".menu_icon").css({ "padding-top": "0.25rem" });
    $(".menu_icon").css({ "padding-bottom": "0.25rem" });
    $(".profile_icon").css({ "padding-top": "0.25rem" });
    $(".profile_icon").css({ "padding-bottom": "0.25rem" });
    $("#logo-text").css({ "padding-top": "0.25rem" });
    $("#logo-text").css({ "padding-bottom": "0rem" });
  } else if (scroll < 75) {
    $(".menu_icon").css({ "padding-top": "1rem" });
    $(".menu_icon").css({ "padding-bottom": "1rem" });
    $(".profile_icon").css({ "padding-top": "1rem" });
    $(".profile_icon").css({ "padding-bottom": "1rem" });
    $("#logo-text").css({ "padding-top": "1rem" });
    $("#logo-text").css({ "padding-bottom": "0rem" });
  }
}
