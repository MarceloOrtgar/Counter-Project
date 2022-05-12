const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const counter = document.querySelector("#counter");

nextBtn.addEventListener("click", (e) => {
  console.log("me diste click");
  aumentar();
});

prevBtn.addEventListener("click", (e) => {
  disminuir();
});

function aumentar() {
  counter.textContent++;
  if (counter.textContent > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "gray";
  }
}

function disminuir() {
  counter.textContent--;
  if (counter.textContent < 0) {
    counter.style.color = "red";
  }else {
    counter.style.color = "gray";
  }
}
