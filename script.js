const slider = document.querySelector("#slider");

let arrayImage = [
	'https://w-dog.ru/wallpapers/10/3/437447145980391/gornoe-ozero-sosny-eli.jpg',
	'https://million-wallpapers.ru/wallpapers/3/28/15114410854025251815/gory-ozero-voda-priroda-zelen-oblaka-solnce-nebo.jpg',
	'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
	'https://www.nastol.com.ua/pic/201304/1680x1050/nastol.com.ua-46325.jpg',
	'https://avatars.mds.yandex.net/get-pdb/251121/e6513b48-be7e-4b8c-ad2a-5f68ff6bfbb6/s1200?webp=false'
];

let maxWidth = null;
let left = null;
let shift = null;
let cliks = 1;

for (i = 0, x = arrayImage.length; i < x; i++) {
	let sliderArr = '<div class="img-block"><img class="img" src=' + arrayImage[i] + '></div>';
	slider.innerHTML += sliderArr;
}

if (window.innerWidth <= 500) {
	shift = 370;
	maxWidth = arrayImage.length * shift;
	slider.style.width = maxWidth + 'px';
} else if (window.innerWidth <= 1920) {
	shift = 600;
	maxWidth = arrayImage.length * shift;
	slider.style.width = maxWidth + 'px';
}

function sliderLeft() {
	if (cliks !== 1) {
		left = left + shift;
		slider.style.left = left + 'px';
		cliks--;
	}
}

function sliderRight() {
	if (cliks !== arrayImage.length) {
		left = left - shift;
		slider.style.left = left + 'px';
		cliks++;
	}
}
