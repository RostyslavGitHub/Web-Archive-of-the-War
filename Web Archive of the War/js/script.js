"use strict"

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger_menu');
if (burgerMenu){
	

	burgerMenu.addEventListener("click", function (e) {
		menu.classList.toggle('_active-menu');
	});

		burgerMenu.addEventListener("click", function (e) {
		burgerMenu.classList.toggle('_close-burger_menu_icon');
	});
}

const closeArea = document.querySelector('.to-close');
if(closeArea){
	burgerMenu.addEventListener("click", function (e) {
		closeArea.classList.toggle('_close_area');
	});

	closeArea.addEventListener("click", function (e) {
		menu.classList.remove('_active-menu');
		burgerMenu.classList.remove('_close-burger_menu_icon');
		closeArea.classList.remove('_close_area');
	});
};

const showMoreInfo = document.querySelectorAll('.catalog__item__name');
let whichMoreInfo = [];
for (let i = 0; i < showMoreInfo.length; i++){
  whichMoreInfo.push(showMoreInfo[i]);
  showMoreInfo[i].addEventListener('click', function(e){
    let num = whichMoreInfo.indexOf(e.target);
	const moreInfo = document.querySelectorAll('.item__more-info');
	moreInfo[num].classList.toggle('_show-more-info');
	});
}

let itemDescription = document.querySelectorAll('.catalog__item__description');
let itemDescriptionScroll = [];
for (let i = 0; i < itemDescription.length; i++){
	itemDescriptionScroll.push(itemDescription[i]);
	let num = itemDescriptionScroll.indexOf();
	if(itemDescription[i].scrollHeight > itemDescription[i].clientHeight){
	   itemDescription[i].style.padding="10px";
	   itemDescription[i].style.justifyContent="start";
	}
}

