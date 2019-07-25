const container = document.querySelector(".main-content");
let currentOpenModal = null;
container.addEventListener('click', (e)=>{
	const link = e.target.closest(".portfolio-link");
	if(!link){
		return;
	}
	else{
		const modal = link.parentElement.nextElementSibling;
		modal.classList.add('isOpen');
		currentOpenModal = modal;
	}
});
const closeButtons = [...document.querySelectorAll(".modal > .close-button")];
closeButtons.forEach((button)=>{
	button.addEventListener('click', e =>{
		e.currentTarget.parentElement.classList.remove("isOpen");
	})
})