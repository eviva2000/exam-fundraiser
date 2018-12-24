"use strict";
let modal1 = document.querySelector(".modal-for-money");
let modal2 = document.querySelector(".modal-for-material");
let selectionWrapper = document.querySelector("#selection-wrapper");
let moneybtn = document.querySelector(".select-money button");
let moneyContainer = document.querySelector(".money-container");
let materialContainer = document.querySelector(".material-container");
let materialbtn = document.querySelector(".select-material button");
let closeBtn = document.querySelector(".closebtn");
let closeBtn2 = document.querySelector(".closebtn2");
let closeBtn3 = document.querySelector(".closebtn3");
let closeBtn4 = document.querySelector(".closebtn4");
const additionalLessonForm = document.querySelector("#lessonInput");
const lessonRadio = document.querySelector("#m4");
const endpoint = "http://5bffd9ef0296210013dc7e55.mockapi.io/money-table";
const endpoint2 = "http://5bffd9ef0296210013dc7e55.mockapi.io/material-table";
let moneyForm = document.querySelector("#moneydonation");
let instrumentForm = document.querySelector("#instrumentdonation");
let temp = document.querySelector(".donators").content;
let thanksTemp = document.querySelector(".thanks").content;
let unsortedList1;
let unsortedList2;

// shows money donation modal //
moneybtn.addEventListener("click", function() {
  moneyContainer.classList.remove("hidden");
  moneyContainer.classList.remove("close-animation");
  moneyContainer.classList.add("md-animation");
  moneyContainer.style.display = "flex";
});
// closes the money modal

closeBtn.addEventListener("click", function() {
  moneyContainer.classList.remove("md-animation");
  moneyContainer.classList.add("close-animation");
  console.log("yess");
});

// shows material donation modal //
materialbtn.addEventListener("click", function() {
  materialContainer.classList.remove("hidden");
  materialContainer.classList.remove("close-animation");
  materialContainer.classList.add("md-animation");
  materialContainer.style.display = "flex";
});
// closes the material modal
closeBtn2.addEventListener("click", function() {
  materialContainer.style.display = "none";
});
//closes the the  thank you modal for money
closeBtn3.addEventListener("click", function() {
  modal1.classList.add("hidden");
  moneyContainer.style.display = "none";
  document.querySelector("#t-heading h2").remove();

  // Opens the additional input for lessons when Lesson radiobutton is checked. Closes, if it`s not.

  instrumentForm.addEventListener("click", showLessonWindow);

  function showLessonWindow() {
    if (lessonRadio.checked) {
      additionalLessonForm.classList.remove("hidden");
    } else {
      additionalLessonForm.classList.add("hidden");
      document.querySelector('input[name="profile"]').value = "";
      document.querySelector('input[name="hours"]').value = "";
    }
  }
  fetchEnpoint1();
});
//closes the the  thank you modal for material
closeBtn4.addEventListener("click", function() {
  modal2.classList.add("hidden");
  materialContainer.style.display = "none";
  fetchEnpoint2();
});
// Opens the additional input for lessons
document.querySelector("#m4").addEventListener("click", function() {
  additionalLessonForm.classList.remove("hidden");
  console.log("yess");
});

// Adds money donation to database//
let userInfoForm1 = document.querySelector("#userInfoForm1");
userInfoForm1.addEventListener("submit", e => {
  e.preventDefault();
  addUserInfo1();
  modal1.classList.remove("hidden");
  modal1.classList.add("md-animation");
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
    .then(d => {
      currentDonator(d);
    });
}

// Adds material donation to database//
let userInfoForm2 = document.querySelector("#userInfoForm2");
userInfoForm2.addEventListener("submit", e => {
  e.preventDefault();
  addUserInfo2();
  modal2.classList.remove("hidden");
  clearForm();
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
    .then(d => {
      currentDonator2(d);
    });
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

//Adds money donators to the corresponding section
/// Fetch endpoint (via get method)
function fetchEnpoint1() {
  fetch(endpoint)
    .then(res => res.json())
    .then(res => {
      showDonators(res);
      progressBar(res);
    });
}
//shows thank you message with the donator name and amount
function currentDonator(singleDonator) {
  console.log("singleDonator");
  let tClone = thanksTemp.cloneNode(true);
  tClone.querySelector("article h2").textContent = `Dear ${
    singleDonator.name
  } thank you for supporting us by donating ${singleDonator.amount} DKK`;
  document.querySelector(".modal-for-money .thanks-parent").appendChild(tClone);
}
//shows thank you message with the donator name and music material
function currentDonator2(singleDonator) {
  console.log("singleDonator");
  let tClone = thanksTemp.cloneNode(true);
  tClone.querySelector("article h2").textContent = `Dear ${
    singleDonator.name
  } thank you for supporting us by donating ${singleDonator.musicMaterial} `;
  document
    .querySelector(".modal-for-material .thanks-parent")
    .appendChild(tClone);
}

function showDonators(donatorlist) {
  //sorts donators by date
  unsortedList1 = donatorlist;
  donatorlist.sort(function(a, b) {
    let key1 = a.date;
    let key2 = b.date;

    if (key1 > key2) {
      return -1;
    } else if (key1 == key2) {
      return 0;
    } else {
      return 1;
    }
  });
  donatorlist.forEach(donator => {
    // console.log(donator);
    let clone = temp.cloneNode(true);
    let myDate = donator.date;
    let newDate = myDate.substr(0, 10);
    clone.querySelector("article p").textContent = `${donator.name} donates ${
      donator.amount
    } DK. at ${newDate}`;

    document.querySelector(".pdonators div").appendChild(clone);
  });
}

fetchEnpoint1();

//Adds material donators to the corresponding section
function addingMaterialDonators() {
  fetch(endpoint2)
    .then(res => res.json())
    .then(showMaterialDonators);
}
function showMaterialDonators(donatorlist) {
  unsortedList2 = donatorlist;
  donatorlist.forEach(donator => {
    // console.log(donator);
    let clone = temp.cloneNode(true);
    let myDate = donator.date;
    let newDate = myDate.substr(0, 10);
    clone.querySelector("article p").textContent = `${donator.name} donates ${
      donator.musicMaterial
    } at ${newDate}`;

    document.querySelector(".pdonators div").appendChild(clone);
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
  //put current amount collected and drag it along with the gradient
  let donatedSumDisplay = document.querySelector("#emptyBar #currentSum");
  donatedSumDisplay.textContent = totalDonated;
  donatedSumDisplay.style.right = 101 - percentRaised + "%";
  //some animation
  donatedSumDisplay.style.opacity = "1";
  //the goal display
  document.querySelector("#emptyBar #goal").textContent =
    "The Goal: " + goal + " DKK";
}
