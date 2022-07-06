
//--------------------------//
const parent_original = document.querySelector('.bottom-header__column');
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
			parent_original.insertBefore(itemA, parent_original.children[2]);
			itemA.classList.remove('done');
		}
	}


	
}

//Вызываем функцию
move();
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
	menuParent.addEventListener('mouseenter', function(event){
	menuParent.classList.add('_active')

});
	menuParent.addEventListener('mouseleave', function(event){
	menuParent.classList.remove('_active')

});
}

const menuPageBurger = document.querySelector('.menu-page__burger');
const menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger. addEventListener('click', function(event){
	menuPageBurger.classList.toggle('_active')
	menuPageBody.classList.toggle('_active')
})