const prices = {
  views: 80,
  followers: 200,
  likes: 100,
  comments: 150,
  story: 50
};

document.getElementById("service").addEventListener("change", () => {
  const service = document.getElementById("service").value;
  document.getElementById("price").innerText = prices[service] || 0;
});

function verify() {
  const service = document.getElementById("service").value;
  const user = document.getElementById("username").value;

  if (!service || user.length < 3) {
    alert("Please select service & valid username/link");
    return;
  }

  document.getElementById("payment").style.display = "block";
}
