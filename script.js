const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".imgContainer");
const contents = document.querySelectorAll(".mainContent");
const aboutBtn = document.querySelector("#aboutBtn");
const dropdown = document.getElementById("myDropdown");
const dropBtn = document.querySelector("#dropBtn");
const oceanCategory = document.querySelector("#oceanCategory");
const spaceCategory = document.querySelector("#spaceCategory");
const earthCategory = document.querySelector("#earthCategory");

nextBtn.addEventListener("click", () => {
	carousel.style.transform = "translateY(-200%)";
});
prevBtn.addEventListener("click", () => {
	carousel.style.transform = "translateY(0%)";
});

dropBtn.addEventListener("mouseenter", () => {
	toggleDropdown(true);
});

dropBtn.addEventListener("mouseleave", () => {
	toggleDropdown(false);
});

dropdown.addEventListener("mouseenter", () => {
	toggleDropdown(true);
});

dropdown.addEventListener("mouseleave", () => {
	toggleDropdown(false);
});

function toggleDropdown(isOnMenu) {
	dropdown.style.display = isOnMenu ? "block" : "none";
}

let currentCategory = "earth";

function changeCategory(newCategory) {
	if (newCategory === currentCategory) {
		return;
	}
	currentCategory = newCategory;

	const mainContentImages = document.querySelectorAll(".mainContent img");
	const articleImages = document.querySelectorAll(".imgContainer img");

	contents.forEach((content, index) => {
		if (index === 0) {
			content.classList.add("active");
		} else {
			content.classList.remove("active");
		}
	});

	document.body.style.background = `var(--${newCategory}-background-gradient)`;

	mainContentImages.forEach((image, index) => {
		image.src = `assets/img/${newCategory}-img (${index + 1}).jpg`;
	});

	articleImages.forEach((image, index) => {
		image.src = `assets/img/${newCategory}-img (${index + 1}).jpg`;
	});
}

earthCategory.addEventListener("click", () => {
	changeCategory("earth");
});

oceanCategory.addEventListener("click", () => {
	changeCategory("ocean");
});

spaceCategory.addEventListener("click", () => {
	changeCategory("space");
});

let isAnimating = false;

function showContent(imageId) {
	isAnimating = true;

	contents.forEach((content) => {
		if (content.id === imageId && content.classList.contains("active")) {
			return;
		}

		if (content.id === imageId) {
			content.classList.add("active");
			content.classList.remove("deactive");
		} else if (content.classList.contains("active")) {
			content.classList.add("deactive");
			setTimeout(() => {
				content.classList.remove("active");
				content.classList.remove("deactive");
			}, 500);
		}
		setTimeout(() => {
			isAnimating = false;
		}, 500);
	});
}

images.forEach((image) => {
	image.addEventListener("click", () => {
		if (!isAnimating) {
			const imageId = image.getAttribute("for");
			showContent(imageId);
		}
	});
});
