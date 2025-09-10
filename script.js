var inquire_button = document.getElementById("inquire-nav");
var inquire_section = document.getElementById("book-container");

const scroll = (div) => {
  div.scrollIntoView({ behavior: "smooth" });
};

inquire_button.onclick = function () {
  scroll(inquire_section);
};
