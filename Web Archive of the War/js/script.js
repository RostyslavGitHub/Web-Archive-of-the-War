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

const showMoreInfo = document.getElementsByClassName('catalog__item__name');
for (let i = 0; i < showMoreInfo.length; i++){
 showMoreInfo[i].addEventListener('click', function(){
		const moreInfo = document.getElementsByClassName('item__more-info');
		moreInfo[i].classList.toggle('_show-more-info');
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

let menuItem = document.getElementsByClassName('menu_item');
if(window.innerWidth < 993){
for(let i = 0; i < menuItem.length; i++){
	menuItem[i].addEventListener("click", function () {
			menu.classList.remove('_active-menu');
			burgerMenu.classList.remove('_close-burger_menu_icon');
			closeArea.classList.remove('_close_area');
	});
}}
