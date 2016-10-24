'use strict';

var xhr;

//ABOUT TO WEBPAGES

function toBlog() {
	window.location.assign('/My_personal_site/Past_Projects/Blog_V3/index.html');
}

function toHome() {
	window.location.assign('/My_personal_site/Past_Projects/Home_improvement_page/index.html');
}

function toTsdc() {
	window.location.assign('/My_personal_site/Past_Projects/TSDC/index.html');
}

function toTravel() {
	window.location.assign('/My_personal_site/Past_Projects/Tourist_page/index.html');
}

function toFila() {
	window.location.assign('/My_personal_site/Past_Projects/Fil-a-mimic/index.html');
}

function toCompany() {
	window.location.assign('/My_personal_site/Past_Projects/Company_Page/index.html')
}

//AJAX STUFF
if (window.XMLHttpRequest) {
	xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	xhr = new ActiveXObject('MSXM12.XMLHTTP');
} else {
	throw new Error('Ajax is not supported by your browser');
}

//MAIN TO ABOUT PAGES

$('.company').click(function (e) {
	$('#updatable-content').load('Additional_Info/Company/about_company.html');
});

$('.tsdc').click(function (e) {
	$('#updatable-content').load('Additional_Info/TSDC/about_tsdc.html');
});

$('.tourist').click(function (e) {
	$('#updatable-content').load('Additional_Info/travel/about_travel.html');
});

$('.fila').click(function (e) {
	$('#updatable-content').load('Additional_Info/fila/about_fila.html');
});

$('.blog').click(function (e) {
	$('#updatable-content').load('Additional_info/Blog/about_blog.html');
});

$('.home').click(function (e) {
	$('#updatable-content').load('Additional_info/home/about_home.html');
});

$('#home-link').click(function (e) {
	$('#updatable-content').load('default.html');
});

//NAV CONTROLS

function openNav() {
	document.getElementById('hidden-nav').style.width = '22em';
	document.getElementById('content').style.MarginLeft = '22em';
	document.getElementById('hidden-nav').style.borderColor = 'rgb(252, 232, 54)';
}

function closeNav() {
	document.getElementById('hidden-nav').style.width = '0';
	document.getElementById('content').style.MarginLeft = '0';
	document.getElementById('hidden-nav').style.borderColor = 'rgb(34, 34, 34)';
}