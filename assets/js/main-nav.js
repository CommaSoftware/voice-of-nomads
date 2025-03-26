const navButton = document.getElementById("buttonToggleNav");
const navPanel = document.querySelector(".main-header__buttons-menu");

if (!!navButton && !!navPanel) {
	navButton.addEventListener("click", () => {
		navPanel.classList.toggle("is-opened")
	})
}