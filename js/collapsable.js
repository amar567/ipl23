const collapsibles = document.querySelectorAll(".collapsible-header");
const onlyExpandOneCheckbox = document.querySelector("#only-expand-one");
let lastActiveCollapsibleBody = null;

function expand(el) {
  if (
    lastActiveCollapsibleBody
  ) {
    unexpand(lastActiveCollapsibleBody);
  }
  el.style.maxHeight = el.scrollHeight + "px";
  el.classList.add("active");
  lastActiveCollapsibleBody = el;
}

function unexpand(el) {
  el.style.maxHeight = null;
  el.classList.remove("active");
}

collapsibles.forEach((collapsible) => {
  const collapsibleBody = collapsible.nextElementSibling;

  if (collapsibleBody.classList.contains("active")) {
    expand(collapsibleBody);
  }

  collapsible.addEventListener("click", function () {
    if (!!collapsibleBody.style.maxHeight) {
      unexpand(collapsibleBody);
    } else {
      expand(collapsibleBody);
    }
  });
});
