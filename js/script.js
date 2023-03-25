"use strict"

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger_menu');
if (burgerMenu){
	burgerMenu.addEventListener("click", function (e) {
		menu.classList.toggle('_active-menu');
		burgerMenu.classList.toggle('_close-burger_menu_icon');
	});
};

let closeMenu = () => {
		menu.classList.remove('_active-menu');
		burgerMenu.classList.remove('_close-burger_menu_icon');
		closeArea.classList.remove('_close_area');
};

const closeArea = document.querySelector('.to-close');
let siteHeightToCloseAreaHeight = () => {
	let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight);

  closeArea.style.height=scrollHeight+'px';
};

if(closeArea){
	siteHeightToCloseAreaHeight();
	burgerMenu.addEventListener("click", function (e) {
		closeArea.classList.toggle('_close_area');
	});

	closeArea.addEventListener("click", function (e) {
		closeMenu();
	});
};

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
		siteHeightToCloseAreaHeight();
	});

	whatButton.addEventListener("click", function (e) {
		blockWhat.style.display="block";
		blockWhy.style.display="none";
		blockHow.style.display="none";
		blockWhat.scrollIntoView();
		siteHeightToCloseAreaHeight();
	});

	howButton.addEventListener("click", function (e) {
		blockHow.style.display="block";
		blockWhat.style.display="none";
		blockWhy.style.display="none";
		blockHow.scrollIntoView();
		siteHeightToCloseAreaHeight();
	});

const showMoreInfo = document.getElementsByClassName('catalog__item__name');
const downArrow = document.getElementsByClassName('arrow-down');
	

if(showMoreInfo){
	for (let i = 0; i < showMoreInfo.length; i++){
 		showMoreInfo[i].addEventListener('click', function(){
		const moreInfo = document.getElementsByClassName('item__more-info');
		moreInfo[i].classList.toggle('_show-more-info');
		downArrow[i].classList.toggle('rotate225');


	});

}};

let itemDescription = document.querySelectorAll('.catalog__item__description');
let itemDescriptionScroll = [];
if(itemDescription){
	for (let i = 0; i < itemDescription.length; i++){
		itemDescriptionScroll.push(itemDescription[i]);
		if(itemDescription[i].scrollHeight > itemDescription[i].clientHeight){
		   itemDescription[i].style.padding="10px";
		   itemDescription[i].style.justifyContent="start";
		}
}};

let menuItem = document.getElementsByClassName('menu_item');
if(menuItem){
	for(let i = 0; i < menuItem.length; i++){
		menuItem[i].addEventListener("click", function () {
			closeMenu();
		});
	}};

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
	if(window.innerWidth < 993){
		closeMenu();
	}
};
window.onscroll = function() {
	showScrollButton();
};
function showScrollButton() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector('.scroll-to-top').style.display = 'block';
	} else {
		document.querySelector('.scroll-to-top').style.display = 'none';
	}
};

const darkMode = document.getElementById("dark-mode");
let isntDarkMode = true;
if (darkMode){

	const moon1 = document.querySelector('.moon1');
	const moon2 = document.querySelector('.moon2');
	const wrapper = document.querySelector('.wrapper');

	const itemBlocks = document.getElementsByClassName('item__block');
	const itemName = document.getElementsByClassName('catalog__item__name');
	const itemLinks = document.getElementsByClassName('item-link');
	const infoBlocksLinks = document.getElementsByClassName('info-block__link');
	const h1 = document.getElementById('h1');
	const scrollTop = document.querySelector('.scroll-to-top');

	const burgerLine1 = document.querySelector('.burger-line1');
	const burgerLine2 = document.querySelector('.burger-line2');

	const topBoxIcon = document.getElementsByClassName('top-box-icon');
	const mainBoxIcon = document.getElementsByClassName('main-box-icon');
	const lineInBoxIcon = document.getElementsByClassName('line-in-box-icon');

	const arrowUp = document.querySelector('.arrow-up');

	darkMode.addEventListener("click", function () {
	if(isntDarkMode){

		if(itemBlocks){
			for (let i = 0; i < itemBlocks.length; i++){
		 			if(innerWidth < 993){
		 				itemBlocks[i].style.border = "2px solid #ADD8E6";
		 				itemBlocks[i].style.borderTop = "none"
		 				itemBlocks[i].style.backgroundColor = "#212121"
			 			for (let n = 0; n < itemName.length; n++){
			 				itemName[n].style.borderTop = "2px solid #ADD8E6"
			 			}} else {
			 				itemBlocks[i].style.border = "2px solid #ADD8E6";
			 				itemBlocks[i].style.borderLeft = "none"
			 				itemBlocks[i].style.backgroundColor = "#212121"
			 					for (let n = 0; n < itemName.length; n++){
			 				itemName[n].style.borderLeft = "2px solid #ADD8E6"

			 			}}
		 		}
		};

		if (itemLinks) {
			for (let i = 0; i < itemLinks.length; i++){
		 		itemLinks[i].style.color = "#00BFFF";
		}};

		if (infoBlocksLinks) {
			for (let i = 0; i < infoBlocksLinks.length; i++){
		 		infoBlocksLinks[i].style.color = "#00BFFF";
		}};

		if (topBoxIcon) {
			for (let i = 0; i < topBoxIcon.length; i++){
		 		topBoxIcon[i].style.border = "3px solid #ADD8E6";
		}};

		if (mainBoxIcon) {
			for (let i = 0; i < mainBoxIcon.length; i++){
		 		mainBoxIcon[i].style.border = "3px solid #ADD8E6";
				mainBoxIcon[i].style.borderTop = "0px solid #ADD8E6";
				mainBoxIcon[i].style.boxShadow = "none";
		}};

		if (lineInBoxIcon){
			for (let i = 0; i < lineInBoxIcon.length; i++){
		 		lineInBoxIcon[i].style.backgroundColor = "#ADD8E6"
		}};

		if (downArrow){
			if(innerWidth < 993){
			for (let i = 0; i < downArrow.length; i++){
		 		downArrow[i].style.border = "solid #ADD8E6";
		 		/*downArrow[i].style.borderWidth = "0 2px 2px 0";*/
		}}};




		darkMode.style.backgroundColor = "#ADD8E6";
		moon1.style.backgroundColor = "black"
		moon2.style.backgroundColor = "#ADD8E6"

		wrapper.style.backgroundColor = "#212121";
		wrapper.style.color = "#ADD8E6";
		h1.style.color = "#ADD8E6";
		
		scrollTop.style.backgroundColor = "#212121"
		scrollTop.style.border = "1px solid rgba(173, 216, 230, 0.2)";
		
		menu.style.backgroundColor = "#262525";
		burgerMenu.style.backgroundColor = "#212121";
		burgerMenu.style.border = "1px solid rgba(173, 216, 230, 0.2)";
		burgerLine1.style.backgroundColor = "#ADD8E6";
		burgerLine2.style.backgroundColor = "#ADD8E6";

		whyButton.style.color = "#00BFFF";
		whatButton.style.color = "#00BFFF";
		howButton.style.color = "#00BFFF";

		arrowUp.style.border = "solid #ADD8E6";
		arrowUp.style.borderWidth = "0 3px 3px 0";

		if(innerWidth < 993){
		 closeMenu();}

		isntDarkMode = false;

	} else {

		
		if(itemBlocks){
			for (let i = 0; i < itemBlocks.length; i++){
		 			if(innerWidth < 993){
		 				itemBlocks[i].style.border = "2px solid black";
		 				itemBlocks[i].style.borderTop = "none"
		 				itemBlocks[i].style.backgroundColor = "white"
			 			for (let n = 0; n < itemName.length; n++){
			 				itemName[n].style.borderTop = "2px solid black"
			 			}} else {
			 				itemBlocks[i].style.border = "2px solid black";
			 				itemBlocks[i].style.borderLeft = "none"
			 				itemBlocks[i].style.backgroundColor = "white"
			 					for (let n = 0; n < itemName.length; n++){
			 				itemName[n].style.borderLeft = "2px solid black"

			 			}}
		 		}
		};

		if (itemLinks) {
			for (let i = 0; i < itemLinks.length; i++){
		 		itemLinks[i].style.color = "#4B0082";
		}};

		if (infoBlocksLinks) {
			for (let i = 0; i < infoBlocksLinks.length; i++){
		 		infoBlocksLinks[i].style.color = "#4B0082";
		}};

		if (topBoxIcon) {
			for (let i = 0; i < topBoxIcon.length; i++){
		 		topBoxIcon[i].style.border = "3px solid black";
		}};

		if (mainBoxIcon) {
			for (let i = 0; i < mainBoxIcon.length; i++){
		 		mainBoxIcon[i].style.border = "3px solid black";
				mainBoxIcon[i].style.borderTop = "0px solid black";
				mainBoxIcon[i].style.boxShadow = "none";
		}};

		if (lineInBoxIcon){
			for (let i = 0; i < lineInBoxIcon.length; i++){
		 		lineInBoxIcon[i].style.backgroundColor = "black"
		}};

		if (downArrow){
			if(innerWidth < 993){
			for (let i = 0; i < downArrow.length; i++){
		 		downArrow[i].style.border = "solid black";
		 		downArrow[i].style.borderWidth = "0 2px 2px 0";
		}}};




		darkMode.style.backgroundColor = "grey";
		moon1.style.backgroundColor = "white"
		moon2.style.backgroundColor = "grey"

		wrapper.style.backgroundColor = "white";
		wrapper.style.color = "black";
		h1.style.color = "black";
		
		scrollTop.style.backgroundColor = "white"
		scrollTop.style.border = "1px solid rgba(0, 0, 0, 0.4)";
		
		menu.style.backgroundColor = "white";
		burgerMenu.style.backgroundColor = "white";
		burgerMenu.style.border = "1px solid rgba(0, 0, 0, 0.4)";
		burgerLine1.style.backgroundColor = "black";
		burgerLine2.style.backgroundColor = "black";

		whyButton.style.color = "#4B0082";
		whatButton.style.color = "#4B0082";
		howButton.style.color = "#4B0082";

		arrowUp.style.border = "solid black";
		arrowUp.style.borderWidth = "0 3px 3px 0";

		if(innerWidth < 993){
		 closeMenu();}


		isntDarkMode = true;
	}
});
}