function startHoverAnimation() {
	var imageElements = document.querySelectorAll(
		".image_container > img:not(.main_img)"
	);

	imageElements.forEach(function (animatedElement, index) {
		var initialTransform = getComputedStyle(animatedElement).transform;
		var currentTransform = new DOMMatrix(initialTransform);

		var translateYValue = currentTransform.m42;

		var hoverAnimation = animatedElement.animate(
			[
				{ transform: `translateY(${translateYValue}px)` },
				{ transform: `translateY(${translateYValue - 10}px)` },
				{ transform: `translateY(${translateYValue}px)` },
			],
			{
				duration: 1500 + index * 500,
				iterations: Infinity,
				easing: "ease-in-out",
				direction: "alternate",
			}
		);
	});
}

// Path: main.js
var isTrue = true;

window.addEventListener("scroll", function () {
	if (
		window.scrollY + window.innerHeight >
			document.documentElement.scrollHeight - 100 &&
		isTrue
	) {
		isTrue = false;
	}

	if (window.scrollY <= 100) {
		isTrue = true;
	}
});




// Hamburger menu
const navBar = document.querySelector(".navBtn");
const toggle = document.querySelector(".toggleBtn");

toggle.addEventListener("click", () => {
	const visible = navBar.getAttribute("data-visible");
	console.log(visible);
	if(visible == "false") {
		navBar.setAttribute("data-visible", true);
		toggle.setAttribute("aria-expanded", true);
	}
	else {
		navBar.setAttribute("data-visible", false);
		toggle.setAttribute("aria-expanded", false);
	}
});





// Create a script element to load ScrollReveal
var script = document.createElement("script");
script.src = "https://unpkg.com/scrollreveal";
script.async = true;

// Append the script to the document's head
document.head.appendChild(script);

// Initialize ScrollReveal when the script is loaded
script.onload = function () {
	// Initialize ScrollReveal with your configuration

	const classes = [
		".leaf_infront",
		".leaf_left",
		".leaf_right",
		".behind_main",
		".main_img1",
		".top_left_img",
		".top_right_img",
	];

	classes.forEach((cl) => {
		ScrollReveal().reveal(cl, {
			duration: 3000,
			origin: "top",
			distance: "400px",
			easing: "cubic-bezier(0.5, 0, 0, 1)",
			rotate: {
				x: 20,
				z: -10,
			},
		});
	});


	// Use scrollReveal to reveal elements on scroll
	ScrollReveal().reveal(".main_img", {
		duration: 3000,
		origin: "top",
		distance: "400px",
		easing: "cubic-bezier(0.5, 0, 0, 1)",
		reset: true,
	});

	if (window.innerWidth > 1024) {
		ScrollReveal().reveal(".podium_img", {
			duration: 2000,
			origin: "top",
			distance: "400px",
			easing: "cubic-bezier(0.5, 0, 0, 1)",
			reset: true,
		});
	}
};

function handleScroll() {
	const element = document.querySelector(".main_img");
}

// Attach the handleScroll function to the window scroll event
window.addEventListener('scroll', handleScroll);


startHoverAnimation();
