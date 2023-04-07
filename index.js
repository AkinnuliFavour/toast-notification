const button = document.querySelector(".button");
const toastContainer = document.querySelector(".toast-container");

const messages = [
  "Message One",
  "Message two",
  "Message three",
  "Message four",
];

const colors = ["purple", "blue", "green", "orange"];

button.addEventListener("click", showNotification);

console.log(toastContainer);
function showNotification() {
  const rand = Math.floor(Math.random() * 3);
  console.log(rand);
  const toast = document.createElement("div");
  const toastMessage = document.createElement("p");
  toastMessage.style.color = colors[rand];
  toastMessage.textContent = messages[rand];
  toast.className = "toast";
  toast.appendChild(toastMessage);
  toastContainer.appendChild(toast);
}

const del = async () => {
  setInterval(() => {
    const children = toastContainer.childNodes;
    toastContainer.removeChild(toastContainer.firstChild);
  }, 4000);
};

del();
