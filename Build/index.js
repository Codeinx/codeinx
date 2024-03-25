"use strict";
let menu = document.getElementById("menu");
let navModal = document.getElementById("navLinkConT");
let body = document.getElementById("body");
let closeIcon = document.getElementById("closeIcon");
let checkState = true;
let showModal = function () {
    if (checkState === true) {
        navModal.classList.remove("navLinkConT");
        navModal.classList.add("navLinkConTVisible");
        checkState = false;
    }
    else if (checkState === false) {
        navModal.classList.remove("navLinkConTVisible");
        navModal.classList.add("navLinkConT");
        checkState = true;
    }
};
menu.addEventListener("click", showModal);
closeIcon.addEventListener("click", showModal);
