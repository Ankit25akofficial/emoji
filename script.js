const emojiBox = document.getElementById("emoji");
let autoInterval = null;

const emojis = {
  happy: ["😀","😁","😂","😍","🥳","😎"],
  sad: ["😢","😭","😞","😔"],
  food: ["🍕","🍔","🍩","🍟","🍎"],
  animals: ["🐶","🐱","🐼","🦁","🐸"]
};

function generateEmoji(category = "happy") {
  const list = emojis[category];
  const random = Math.floor(Math.random() * list.length);
  emojiBox.innerText = list[random];

  emojiBox.classList.add("animate");
  setTimeout(() => emojiBox.classList.remove("animate"), 300);
}

function copyEmoji() {
  navigator.clipboard.writeText(emojiBox.innerText);
  alert("Emoji Copied!");
}

function toggleAuto() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    alert("Auto Stopped");
  } else {
    autoInterval = setInterval(() => generateEmoji("happy"), 1000);
    alert("Auto Started");
  }
}
