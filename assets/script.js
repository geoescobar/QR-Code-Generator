const input = document.querySelector(".form input");
const button = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-img img");
const title = document.querySelector("title");
// url regex code to read urls
const urlReader = /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/



button.addEventListener("click", function (event) {
  event.preventDefault();
  loadCode();
});

function loadCode() {
  let url = input.value.trim();
  if(url.length > 0 && url.match(urlReader)){
    let imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    qrImg.src = imgSrc;
    title.style.display = "none";
  } else {
    alert('Please enter valid URL');
    return loadCode;
  }
}

