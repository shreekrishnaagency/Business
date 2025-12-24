// PRICE LIST
const prices = {
  views: 49,
  followers: 199,
  likes: 99,
  comments: 149,
  story: 39
};

const serviceSelect = document.getElementById("service");
const priceSpan = document.getElementById("price");
const paymentDiv = document.getElementById("payment");
const usernameInput = document.getElementById("username");

// Update price when service changes
serviceSelect.addEventListener("change", function () {
  const selectedService = this.value;

  if (prices[selectedService]) {
    priceSpan.innerText = prices[selectedService];
  } else {
    priceSpan.innerText = 0;
  }
});

// Verify button function
function verify() {
  const service = serviceSelect.value;
  const username = usernameInput.value.trim();

  if (service === "") {
    alert("Please select a service");
    return;
  }

  if (username === "") {
    alert("Please enter Instagram username or reel link");
    return;
  }

  paymentDiv.style.display = "block";
}
