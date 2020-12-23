const messages = [];

let counter = true;

const myButton = document.getElementById("send");
const input = document.getElementById("message");
const tooltip = document.getElementById("tooltip");
const parent = document.getElementById("wrapper");
const tooltip2 = document.getElementById("tooltip-2");
const up = document.getElementById("up");

const renderMessages = () => {
  let text = input.value;
  if (!text) return;
  let html = "";
  let message = { autor: "Test", text: text, income: counter };
  messages.push(message);

  messages.forEach(({ autor, text, income }) => {
    html += `<div class=${income ? "income" : "own"}>
      <h4 class="autor">${autor}</h4>
      <p class="message">
        ${text}
      </p>
    </div>`;
  });

  parent.innerHTML = html;
  counter = !counter;
  parent.scrollTo({ left: 0, top: 100000, behavior: "smooth" });
  input.value = "";
};

const onSetStyle = (element, hide) => {
  let styleText = hide
    ? `padding:0 10px; height: 0; box-shadow: none;`
    : `padding: 10px; height: 60px; border: 1px solid gray; box-shadow: 5px 5px 15px 1px #000000;`;
  element.style.cssText = styleText;
};

myButton.addEventListener("click", renderMessages);

myButton.addEventListener("mouseenter", () => onSetStyle(tooltip2, false));

myButton.addEventListener("mouseleave", () => onSetStyle(tooltip2, true));

input.addEventListener("focus", () => onSetStyle(tooltip, false));

input.addEventListener("blur", () => onSetStyle(tooltip, true));

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    renderMessages();
  }
});

up.addEventListener("click", () => {
  parent.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

parent.addEventListener("scroll", function (event) {
  let isBottom = parent.scrollHeight - parent.scrollTop - parent.clientHeight < 1;
  if (isBottom) {
    up.style.cssText = "  display: flex;";
  } else {
    up.style.display = "none";
  }
});

myButton.removeEventListener("click", renderMessages);
