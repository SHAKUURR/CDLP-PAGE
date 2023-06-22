"use strict";
const sidebar = document.querySelector(".side-bar");
const menu = document.getElementById("menu");
document.querySelector(".barLink").addEventListener("click", function () {
	if (sidebar.classList.contains("sidebarHidden")) {
		sidebar.classList.remove("sidebarHidden");
		menu.classList.toggle("active");
	} else {
		sidebar.classList.add("sidebarHidden");
		menu.classList.toggle("active");
	}
});

const menu_items = document.querySelectorAll(".linkk");

function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		menu.classList.toggle("active");
		close();
	});
});

//FAQ SECTION.....................
const icon = document.querySelectorAll(".iconn");
const text = document.querySelectorAll(".step-para");

for (let i = 0; i < icon.length; i++) {
	icon[i].addEventListener("click", function () {
		text[i].classList.toggle("hide");
		icon[i].classList.toggle("hide");
	});
}

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".hero-text p", {
	delay: 500,
	distance: "40px",
	origin: "left",
});

ScrollReveal().reveal(".about-p", {
	delay: 200,
	distance: "50px",
	origin: "left",
});

ScrollReveal().reveal(".hero-img", {
	delay: 300,
	origin: "bottom",
});

ScrollReveal().reveal(".customer-img, .customer-video", {
	delay: 200,
	origin: "bottom",
});

ScrollReveal().reveal(".customer-text, .text-video", {
	delay: 10,
	origin: "left",
});

ScrollReveal().reveal(".contain, .product", {
	delay: 400,
	origin: "bottom",
	interval: 200,
});

ScrollReveal().reveal(".team-box", {
	delay: 200,
	origin: "left",
	interval: 100,
	rotate: { x: 1000, z: 1000 },
});

//redirect code
// Assume the scannedURL variable contains the URL obtained from the barcode
const scannedURL = "https://cdlp-hubs.vercel.app/shakur"; // Example value, replace with actual scanned URL

// Parse the scanned URL to extract the name
const name = scannedURL.split("/").pop(); // Extract the last portion of the URL

// Remove the name from the scanned URL
const modifiedURL = scannedURL.replace(`/${name}`, "");

// Redirect the user to the modified URL
window.location.href = modifiedURL;
