//#region src/js/common/functions.js
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	}
};
function addTouchAttr() {
	if (isMobile.any()) document.documentElement.setAttribute("data-fls-touch", "");
}
function addLoadedAttr() {
	if (!document.documentElement.hasAttribute("data-fls-preloader-loading")) window.addEventListener("load", function() {
		setTimeout(function() {
			document.documentElement.setAttribute("data-fls-loaded", "");
		}, 0);
	});
}
function getDigFormat(item, sepp = " ") {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`);
}
function uniqArray(array) {
	return array.filter((item, index, self) => self.indexOf(item) === index);
}
//#endregion
//#region src/js/app.js
addTouchAttr();
addLoadedAttr();
isMobile();
//#endregion
export { isMobile as n, uniqArray as r, getDigFormat as t };
