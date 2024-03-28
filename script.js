const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".imgContainer");
const contents = document.querySelectorAll(".mainContent");

nextBtn.addEventListener("click", () => {
	carousel.style.transform = "translateY(-200%)";
});
prevBtn.addEventListener("click", () => {
	carousel.style.transform = "translateY(0%)";
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
