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
let closeAreaHeight = () => {
	let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight);

  closeArea.style.height=scrollHeight+'px';
}

const whyButton = document.getElementById('whyButton');
const blockWhy = document.getElementById('why');
const whatButton = document.getElementById('whatButton');
const blockWhat = document.getElementById('what');
const howButton = document.getElementById('howButton');
const blockHow = document.getElementById('how');

	whyButton.addEventListener("click", function (e) {
		blockWhy.style.display="block";
		blockWhat.style.display="none";
		blockHow.style.display="none";
		blockWhy.scrollIntoView();
		closeAreaHeight();
	});

	whatButton.addEventListener("click", function (e) {
		blockWhat.style.display="block";
		blockWhy.style.display="none";
		blockHow.style.display="none";
		blockWhat.scrollIntoView();
		closeAreaHeight();
	});

	howButton.addEventListener("click", function (e) {
		blockHow.style.display="block";
		blockWhat.style.display="none";
		blockWhy.style.display="none";
		blockHow.scrollIntoView();
		closeAreaHeight();
	});

if(closeArea){
	closeAreaHeight();
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
if(showMoreInfo){
	for (let i = 0; i < showMoreInfo.length; i++){
 		showMoreInfo[i].addEventListener('click', function(){
		const moreInfo = document.getElementsByClassName('item__more-info');
		moreInfo[i].classList.toggle('_show-more-info');
	});
}}

let itemDescription = document.querySelectorAll('.catalog__item__description');
let itemDescriptionScroll = [];
if(itemDescription){
	for (let i = 0; i < itemDescription.length; i++){
		itemDescriptionScroll.push(itemDescription[i]);
		let num = itemDescriptionScroll.indexOf();
		if(itemDescription[i].scrollHeight > itemDescription[i].clientHeight){
		   itemDescription[i].style.padding="10px";
		   itemDescription[i].style.justifyContent="start";
		}
}}

let menuItem = document.getElementsByClassName('menu_item');
if(menuItem){
	for(let i = 0; i < menuItem.length; i++){
		menuItem[i].addEventListener("click", function () {
			menu.classList.remove('_active-menu');
			burgerMenu.classList.remove('_close-burger_menu_icon');
			closeArea.classList.remove('_close_area');
		});
	}};




/*const scrUp = document.querySelector('.scroll-up');
if (scrUp){
	let scrollpos = window.scrollY;
	const scrollButton = document.querySelector(".scroll-up");
	let scrollChange = 340;
	const add_class_on_scroll = () => scrollButton.classList.add("_show-scroll-up");
	window.addEventListener('scroll', function() { 
	  scrollpos = window.scrollY;

	  if (scrollpos >= scrollChange) { add_class_on_scroll(); }
	});

	const remove_class_on_scroll = () => scrollButton.classList.remove("_show-scroll-up");
	window.addEventListener('scroll', function() { 
	  scrollpos = window.scrollY;

	  if (scrollpos >= scrollChange) { add_class_on_scroll(); }
	  else { remove_class_on_scroll(); }
	  
	});
}*/