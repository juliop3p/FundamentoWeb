const nome = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const validateEmail = () => {
  const regex = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/g;

  if (!regex.test(email.value)) {
    email.classList.remove("border-green");
    email.classList.add("border-red");
  } else {
    email.classList.remove("border-red");
    email.classList.add("border-green");
  }
};

const validateText = input => {
  if (input.value.length < 3) {
    input.classList.remove("border-green");
    input.classList.add("border-red");
  } else {
    input.classList.remove("border-red");
    input.classList.add("border-green");
  }
};

const validateTextarea = () => {
  if (message.value.length < 150) {
    message.classList.remove("border-red");
    message.classList.add("border-green");
  } else {
    message.classList.remove("border-green");
    message.classList.add("border-red");
  }
};
