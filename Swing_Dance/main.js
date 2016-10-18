'use strict';

var xhr;

if (window.XMLHttpRequest) {
	xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	xhr = new ActiveXObject('MSXM12.XMLHTTP');
} else {
	throw new Error('Ajax is not supported by your browser');
}

xhr.onreadystatechange = function () {
	if (xhr.readyState < 4) {
		document.getElementById('updatable-content').innerHTML = 'Loading...';
	} else if (xhr.readyState === 4) {
		if (xhr.status === 200 && xhr.status < 300) {
			document.getElementById('updatable-content').innerHTML = xhr.responseText;
		}
	}
};



$('#about').click(function (e) {
	$('#updatable-content').load('/Past_Projects/TSDC/Pages/front.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		location.hash = 'default';
	}
	e.preventDefault();
});

$('#contact').click(function (e) {
	$('#updatable-content').load('/Past_Projects/TSDC/Pages/locate_contact.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		location.hash = 'location';
	}
	e.preventDefault();
});

$('#membership').click(function (e) {
	$('#updatable-content').load('/Past_Projects/TSDC/Pages/membership.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		location.hash = 'membership';
	}
	e.preventDefault();
});

$('#resources').click(function (e) {
	$('#updatable-content').load('/Past_Projects/TSDC/Pages/resources.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		location.hash = 'resources';
	}
	e.preventDefault();
});