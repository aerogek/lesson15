const messages = [];

let counter = true;

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const renderMessages = () => {
  const parent = document.getElementById("wrapper");

  let html = "";

  let newMessage = { autor: makeid(10), text: makeid(20).replace("a", " "), income: counter };

  messages.push(newMessage);

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
};

setInterval(() => {
  renderMessages();
}, 2000);
