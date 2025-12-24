const adminId = "krishnraj_tripathi";
const passwordHash = "e3b0c44298fc1c149afbf4c8996fb924"; // hidden logic demo

function login() {
  const id = document.getElementById("id").value;
  const pass = document.getElementById("pass").value;

  if (id === adminId && pass === "krishnrajtripathi310106@") {
    alert("Admin Access Granted");
  } else {
    alert("Access Denied");
  }
}
