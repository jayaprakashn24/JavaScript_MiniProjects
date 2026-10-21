const title = document.getElementById("title");
const description = document.getElementById("description");
const count = document.getElementById("count");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const mybutton = document.getElementById("mybutton");
const resetBtn = document.getElementById("resetBtn");

// 1. Change heading styles using DOM
title.style.color = "green";
title.style.fontSize = "32px";

// 2. Update preview and character count in real time
description.addEventListener("input", function () {
  const text = description.value;

  // Update preview immediately
  preview.textContent = text || "Your text appears here...";

  // Count characters immediately
  count.textContent = text.length;

  // Update status
  status.textContent = text.length + " characters entered";

  // Change counter color near the limit
  count.style.color = text.length >= 10 ? "red" : "black";
});

// 3. Change heading when clicked
changeBtn.addEventListener("click", function () {
  title.textContent = "Welcome to Blender!";
  title.style.color = "black";

  status.textContent = "Heading changed successfully!";
});

// 4. Toggle background color
let isBlue = false;

colorBtn.addEventListener("click", function () {
  if (isBlue) {
    document.body.style.backgroundColor = "#ece6e6";
    status.textContent = "Default background restored";
  } else {
    document.body.style.backgroundColor = "#08192f";
    status.textContent = "Background changed to blue";
  }

  isBlue = !isBlue;
});

// 5. Understand JavaScript event properties
mybutton.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Clicked element:", event.target);
  console.log("Event listener element:", event.currentTarget);

  status.textContent = "You clicked: " + event.currentTarget.textContent;
});

// 6. Reset the application
resetBtn.addEventListener("click", function () {
  title.textContent = "Welcome to 3D World";
  title.style.color = "green";

  description.value = "";
  preview.textContent = "Your text appears here...";
  count.textContent = "0";
  count.style.color = "black";

  document.body.style.backgroundColor = "#f4f7fb";
  isBlue = false;

  status.textContent = "Everything has been reset!";
});
