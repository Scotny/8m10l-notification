import { createNotification } from "./notification.js";

const success = document.getElementById("success");
const warning = document.getElementById("warning");
const fail = document.getElementById("fail");

success.addEventListener("click", () => {
  createNotification("success");
});

warning.addEventListener("click", () => {
  createNotification("warning");
});

fail.addEventListener("click", () => {
  createNotification("fail");
});
