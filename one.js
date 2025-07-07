let upload = document.querySelector(".upload-box");
let box = document.querySelector(".box");
let up = document.querySelector(".up");
let upText = document.getElementById("upload-text");
let remChang = document.querySelector(".remChang");
let remove = document.querySelector(".re1");
let retu = up.src;

upload.addEventListener("click", () => {
  box.click();
});
box.addEventListener("change", () => {
  const reader = new FileReader();
  const file = box.files[0];
  reader.onload = (e) => {
    if (file) {
      up.src = e.target.result;
      upText.style.display = "none";
      remChang.style.display = "block";
      remove.style.display = "block";
    }
  };
  reader.readAsDataURL(file);
});
remove.addEventListener("click", () => {
  up.src = retu;
  upText.style.display = "block";
  remChang.style.display = "none";
  remove.style.display = "none";
});
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  localStorage.setItem("cover", up.src);
  window.location.href = "/one2.html";
});
