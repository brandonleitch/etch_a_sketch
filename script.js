const container_div = document.querySelector("#main-container");
const size_input = document.querySelector("#size-input");

function init(){
  container_div.style.gridTemplate = `repeat(${size_input.value}, 1fr) / repeat(${size_input.value}, 1fr)`;

  while(container_div.hasChildNodes()){
    container_div.removeChild(container_div.firstChild);
  }

  for(let i = 0; i < Math.pow(size_input.value, 2); i++) {
    let div = document.createElement("div");
    div.opacity = 0;
    div.classList.add("box");

    div.addEventListener("mouseenter", update);

    container_div.appendChild(div);
  }
}

function update(e) {
  let target = e.currentTarget;

  target.opacity += 1;
  target.classList.add(`highlight-${target.opacity}`);

  if(target.opacity == 10){
    target.removeEventListener("mouseenter", update);
  }
}

// Reset Button clears board
const reset_button = document.querySelector("#reset");

reset_button.addEventListener("click", init);

init();
