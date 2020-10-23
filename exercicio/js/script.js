const validateField = input => {
  console.log(input);
  if (input.value.length < 5) {
    input.style.background = "#ff6348";
  } else {
    input.style.background = "#2ed573";
  }
};
