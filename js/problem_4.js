const messageInput = document.querySelector("#problem-4 #message-input");
const messageFeedback = document.querySelector("#problem-4 #message-feedback");

const MAX_CHARACTERS = 50;

// Write your code here
function updateUI(curr) {
  if (curr <= MAX_CHARACTERS) {
    handleRemaining(MAX_CHARACTERS - curr);
  } else if (curr > MAX_CHARACTERS) {
    handleOver(curr - MAX_CHARACTERS);
  } else {
    throw new Error("You have done the impossible");
  }
}

function handleRemaining(left) {
  messageInput.classList.remove("is-invalid");
  messageFeedback.classList.remove("invalid-feedback");

  messageInput.classList.add("is-valid");
  messageFeedback.classList.add("valid-feedback");

  messageFeedback.textContent = `${left} character${addS(left)} left`;
}

function handleOver(over) {
  messageInput.classList.remove("is-valid");
  messageFeedback.classList.remove("valid-feedback");

  messageInput.classList.add("is-invalid");
  messageFeedback.classList.add("invalid-feedback");

  messageFeedback.textContent = `${over} character${addS(over)} too long`;
}

messageInput.addEventListener("input", () => {
  updateUI(messageInput.value.length);
});

updateUI(messageInput.value.length);
