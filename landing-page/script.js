"use strict";
let modal = document.querySelector(".modal");
let selectionWrapper = document.querySelector(".selection-wrapper");
let moneybtn = document.querySelector(".select-money button");
let moneyContainer = document.querySelector(".money-container");
let materialContainer = document.querySelector(".material-container");
let materialbtn = document.querySelector(".select-material button");
let closeBtn = document.querySelector(".closebtn");
const endpoint = "http://5bffd9ef0296210013dc7e55.mockapi.io/userinfo";
let moneyForm = document.querySelector("#moneydonation");
let instrumentForm = document.querySelector("#instrumentdonation");
// showing money donation modal //
moneybtn.addEventListener("click", function() {
  moneyContainer.classList.remove("hidden");
  moneyContainer.style.display = "flex";
});
// closing the money modal
closeBtn.addEventListener("click", function() {
  moneyContainer.style.display = "none";
  console.log("yess");
});
// showing material donation modal //
materialbtn.addEventListener("click", function() {
  materialContainer.classList.remove("hidden");
  materialContainer.style.display = "flex";
});
// closing the material modal
closeBtn.addEventListener("click", function() {
  materialContainer.style.display = "none";
  console.log("yess");
});
// ADDING money donation to database//
let userInfoForm1 = document.querySelector("#userInfoForm1");
userInfoForm1.addEventListener("submit", e => {
  e.preventDefault();
  addUserInfo1();
  // modal.style.display = "block";
  clearForm();
});
function addUserInfo1() {
  let amount = document.querySelector('input[name="amount"]:checked').value;

  const userInfo = {
    name: userInfoForm1.elements.name.value,
    email: userInfoForm1.elements.email.value,
    amount: document.querySelector('input[name="amount"]:checked').value
    // musicMaterial: document.querySelector('input[name="instrument"]:checked').value
  };

  if (amount === "other") {
    userInfo.amount = moneyForm.elements.custome.value;
  }

  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(userInfo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => {});
}

// ADDING material donation to database//
let userInfoForm2 = document.querySelector("#userInfoForm2");
userInfoForm2.addEventListener("submit", e => {
  e.preventDefault();
  addUserInfo2();
  // modal.style.display = "block";
  // clearForm();
});
function addUserInfo2() {
  const userInfo = {
    name: userInfoForm2.elements.name.value,
    email: userInfoForm2.elements.email.value,
    musicMaterial: document.querySelector('input[name="instrument"]:checked')
      .value
  };

  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(userInfo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => {});
}
function clearForm() {
  userInfoForm.elements.name.value = "";
  userInfoForm.elements.email.value = "";
  moneyForm.elements.amount.value = "";
}
