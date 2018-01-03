const container_div = document.querySelector("#main-container");

for(let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("box");

  div.addEventListener("mouseenter", e => {
    e.currentTarget.style.backgroundColor = "blue";
  });

  container_div.appendChild(div);
}
