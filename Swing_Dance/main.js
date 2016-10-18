'use strict';

function GetData() {
	$('#updatablecontent').load('pages/front.html');
}

$('#about').click(function () {$('#updatable-content').load('front.html'); });
$('#contact').click(function () {$('#updatable-content').load('locate_contact.html'); });
$('#membership').click(function () {$('#updatable-content').load('membership.html'); });
$('#resources').click(function () {$('#updatable-content').load('resources.html'); });

GetData();


//var xhr;
//
//if (window.XMLHttpRequest) {
//	xhr = new XMLHttpRequest();
//} else if (window.ActiveXOject) {
//	xhr = new ActiveXObject('Msxm122.XMLHTTP');
//} else {
//	throw new Error('Ajax is not supported by your browser');
//}
//
//xhr.onreadystatechange = function () {
//	if (xhr.readyState < 4) {
//		document.getElementById('updatable-content').innerHTML = 'Loading...';
//	} else if (xhr.readystate === 4) {
//		if (xhr.status === 200 && xhr.status < 300) {
//			document.getElementById('updatable-content').innerHTML = xhr.responseText;
//		}
//	}
//	xhr.open('GET', 'front.html');
//	xhr.send(null);
//};
