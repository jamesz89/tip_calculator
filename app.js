function calculateTip() {
  const amount = Number(document.getElementById("amount").value);
  const rating = document.getElementById("rating").value;
  const numberOfPeople = Number(document.getElementById("people").value);
  let tip = 0;
  switch (rating) {
    case "awesome":
      tip = amount * 0.1;
      break;
    case "great":
      tip = amount * 0.08;
      break;
    case "regular":
      tip = amount * 0.06;
      break;
    case "poor":
      tip = amount * 0.04;
      break;
    case "bad":
      tip = amount * 0.02;
  }
  tip += (amount * numberOfPeople) / 100;
  if (amount == "" || numberOfPeople == "") {
    output.innerHTML = `<span class="error">Please fill all the fields</span>`;
    setTimeout(() => {
      output.innerHTML = "";
    }, 3000);
  } else {
    output.innerHTML = `<span class="success">$${tip}</span>`;
  }
}

// Get Button
const calculate = document.getElementById("calculateBtn");

// Event Listener
calculate.addEventListener("click", calculateTip);
