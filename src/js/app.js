
//--------------------------//
const parentOriginal = document.querySelector('.bottom-header__column');
const parentBody = document.querySelector('.menu__body');
const itemA = document.querySelector('.bottom-header__actions ');
const headerItem = document.querySelector('.contacts-header');
const craf = document.querySelector('.info-header__craft');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);




function move() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 640) {
		if (!itemA.classList.contains('done')) {
			parentBody.insertBefore(itemA, parentBody.children[2]);
			itemA.classList.add('done');
		}
	} else {
		if (itemA.classList.contains('done')) {
			parentOriginal.insertBefore(itemA, parentOriginal.children[2]);
			itemA.classList.remove('done');
		}
	}



}

//Вызываем функцию
move();

const serchPage = document.querySelector('.serch-page');

const pageContainer = document.querySelector('.page');
const pageContent = document.querySelector('.page__content');


window.addEventListener('resize', serchMove)

function serchMove() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 640) {
		if (!serchPage.classList.contains('done')) {
			pageContainer.insertBefore(serchPage, pageContainer.children[0])
			serchPage.classList.add('done');
		}
	} else {
		if (serchPage.classList.contains('done')) {
			pageContent.insertBefore(serchPage, pageContent.children[0])
			serchPage.classList.remove('done');
		}

	}
}
//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//if (viewport_width <= 640) {
//	if (!serchPage.classList.contains('done')) {
//		pageContainer.insertBefore(serchPage, pageContainer.children[0]);
//		serchPage.classList.add('done');
//	}
//} else {
//	if (serchPage.classList.contains('done')) {
//		pageContent.insertBefore(serchPage, pageContent.children[2]);
//		serchPage.classList.remove('done');
//	}
//}
//
//
//
//}
serchMove();
//-------------------------//


import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'


const swiper = new Swiper()


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows())
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');


}

else { document.body.classList.add('_pc') }

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
	menuIcon.addEventListener('click', function (event) {
		document.body.classList.toggle('_lock')
		menuIcon.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})

}





const menuParents = document.querySelectorAll('.menu-page__parent');
const submenuItems = document.querySelectorAll('.submenu-page__item');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener('mouseenter', function (event) {
		menuParent.classList.add('_active')

	});
	menuParent.addEventListener('mouseleave', function (event) {
		menuParent.classList.remove('_active')

	});
}

const menuPageBurger = document.querySelector('.menu-page__burger');
const menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener('click', function (event) {
	menuPageBurger.classList.toggle('_active')
	menuPageBody.classList.toggle('_active')
})

const serchTitle = document.querySelector('.serch-page__title');
const categoriesSerch = document.querySelector('.categories-serch');

serchTitle.addEventListener('click', function (event) {
	categoriesSerch.classList.toggle('_active')

})

const serchItem = document.querySelector('.categories-serch__item');
//const serchItemInput1 = serchItem.documentElement('input');
const serchItemInput = document.querySelectorAll('.categories-serch__item input');
const serchItemLabel = document.querySelectorAll('.categories-serch__item label');

for (let index = 0; index < serchItemInput.length; index++) { 
	let serchItemInputs = serchItemInput[index];
	let serchItemLabels = serchItemLabel[index];

	serchItemInputs. addEventListener('change', function(event){
		
		serchItemLabels.classList.toggle('_active')

	


/*if(inputActive.length > 0) {
	for (let index = 0; index < inputActive.length; index++) {	
		if(serchItemInput[index].checked){
			nameActiveInput.push(serchItemInput[index].value)	
			

			serchSelected.textContent = nameActiveInput;


		}}
}else {
	serchSelected.textContent = null;

}*/
const inputActive = document.querySelectorAll('.categories-serch__item label._active');

		
let serchSelected = document.querySelector('.serch-page__selected');
let nameActiveInput = [];
/*
if(inputActive.length > 0) {
	for (let index = 0; index < inputActive.length; index++) {	
		if(serchItemInput[index].checked){
			nameActiveInput.push(serchItemLabel[index].textContent)	
			

			serchSelected.textContent = nameActiveInput;


		}}
}else {
	serchSelected.textContent = null;

}*/

		if (inputActive.length > 0) {
		for (let i = 0; i < inputActive.length; i++) {
			const element = inputActive[i].textContent;
			nameActiveInput.push(inputActive[i].textContent);
			serchSelected.innerHTML = nameActiveInput;
		}
			serchTitle.classList.add('_categories');
			const categoriesActive = document.querySelector('.categories-active');
			categoriesActive.innerHTML = categoriesActive.getAttribute('data-text')  + ' ' + inputActive.length;
			//categoriesActive.insertAdjacentElement = categoriesActive.textContent + ' ' + inputActive.length;
			
			
		}else{serchTitle.classList.remove('_categories');
		serchSelected.innerHTML = null;}
	})
 }


console.log(serchPage);

