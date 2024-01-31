var typed = new Typed(".autoo-type", {
  strings: ["Mycelium Packaging", "Zero Waste", "Life without plastic"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
