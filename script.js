var about_button = document.getElementById("about-button");
var about_section = document.getElementById("tag-container");
var services_button = document.getElementById("services-button");
var services_section = document.getElementById("desc-container");
var inquire_button = document.getElementById("inquire-nav");
var inquire_section = document.getElementById("book-container");

const scroll = (div) => {
    div.scrollIntoView({behavior: "smooth"});
}

about_button.onclick = function() {scroll(about_section)};
services_button.onclick = function() {scroll(services_section)};
inquire_button.onclick = function() {scroll(inquire_section)};