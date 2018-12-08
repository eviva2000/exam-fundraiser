"use strict";
let modal = document.querySelector(".modal");
let selectionWrapper = document.querySelector(".selection-wrapper");
let moneybtn = document.querySelector(".select-money button");
let moneyContainer = document.querySelector(".money-container");
let materialContainer = document.querySelector(".material-container");
let materialbtn = document.querySelector(".select-material button");
let closeBtn = document.querySelector(".closebtn");
let closeBtn2 = document.querySelector(".closebtn2");
const additionalLessonForm = document.querySelector("#lessonInput");
const endpoint = "http://5bffd9ef0296210013dc7e55.mockapi.io/money-table";
const endpoint2 = "http://5bffd9ef0296210013dc7e55.mockapi.io/material-table";
let moneyForm = document.querySelector("#moneydonation");
let instrumentForm = document.querySelector("#instrumentdonation");
let temp = document.querySelector("template").content;
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
closeBtn2.addEventListener("click", function() {
  materialContainer.style.display = "none";
  console.log("yess");
});

// Opens the additional input for lessons
document.querySelector("#m4").addEventListener("click", function() {
  additionalLessonForm.classList.remove("hidden");
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
  let comment = document.querySelector("#userInfoForm1 textarea").value;
  const userInfo = {
    name: userInfoForm1.elements.name.value,
    email: userInfoForm1.elements.email.value,
    amount: document.querySelector('input[name="amount"]:checked').value,
    comment: comment
  };

  if (amount === "other") {
    userInfo.amount = moneyForm.elements.custome.value;
    document.querySelector('input[name="custome"]').style.display = "none";
  }
  if (!comment) {
    console.log("none");
    comment: "none";
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
  let comment2 = document.querySelector("#userInfoForm2 textarea").value;
  const userInfo = {
    name: userInfoForm2.elements.name.value,
    email: userInfoForm2.elements.email.value,
    musicMaterial: document.querySelector('input[name="instrument"]:checked')
      .value,
    profile: document.querySelector('input[name="profile"]').value,
    hours: document.querySelector('input[name="hours"]').value,
    comment: comment2
  };
  if (!comment2) {
    console.log("none");
    comment: "none";
  }

  fetch(endpoint2, {
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
  userInfoForm1.elements.name.value = "";
  userInfoForm1.elements.email.value = "";
  moneyForm.elements.amount.value = "";
  userInfoForm2.elements.name.value = "";
  userInfoForm2.elements.email.value = "";
  document.querySelector('input[name="profile"]').value = "";
  document.querySelector('input[name="hours"]').value;
}

//Adding money donators to the corresponding section
/// Fetch endpoint (via get method)
function fetchEnpoint1() {
  fetch(endpoint)
    .then(res => res.json())
    .then(res => {
      showDonators;
      progressBar(res);
    });
}
function showDonators(donatorlist) {
  console.log(donatorlist);
  donatorlist.sort(function(a, b) {
    var key1 = a.date;
    var key2 = b.date;

    if (key1 > key2) {
      return -1;
    } else if (key1 == key2) {
      return 0;
    } else {
      return 1;
    }
  });
  donatorlist.forEach(donator => {
    console.log(donator);
    let clone = temp.cloneNode(true);
    let myDate = donator.date;
    let newDate = myDate.substr(0, 10);
    clone.querySelector("article p").textContent = `${donator.name} donates ${
      donator.amount
    } DK. at ${newDate}`;

    console.log(newDate);
    document.querySelector(".pdonators").appendChild(clone);
  });
}
fetchEnpoint1();

//Adding material donators to the corresponding section
function addingMaterialDonators() {
  fetch(endpoint2)
    .then(res => res.json())
    .then(showMaterialDonators);
}
function showMaterialDonators(donatorlist) {
  donatorlist.sort(function(a, b) {
    var key1 = a.date;
    var key2 = b.date;

    if (key1 > key2) {
      return -1;
    } else if (key1 == key2) {
      return 0;
    } else {
      return 1;
    }
  });
  donatorlist.forEach(donator => {
    console.log(donator);
    let clone = temp.cloneNode(true);
    let myDate = donator.date;
    let newDate = myDate.substr(0, 10);
    clone.querySelector("article p").textContent = `${donator.name} donates ${
      donator.musicMaterial
    } at ${newDate}`;

    document.querySelector(".pdonators").appendChild(clone);
  });
}
addingMaterialDonators();

//Progress bar functions
function progressBar(data) {
  //Goal
  const goal = 50000;
  //Transforms strings in array to numbers
  let total = data.map(item => Number(item.amount));

  //Sums up numbers of the array (amounts)
  const totalDonated = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  //Calculate the progress percentage relative to the goal
  const percentRaised = (totalDonated * 100) / goal;
  //increase background gradient size as it expands to the percentage
  document.querySelector("#emptyBar").style.backgroundSize =
    100 * percentRaised + "%";
}
