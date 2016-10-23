var xhr;

if (window.XMLHttpRequest) {
	xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	xhr = new ActiveXObject('MSXM12.XMLHTTP');
} else {
	throw new Error('Ajax is not supported by your browser');
}

$('#company').click(function (e) {
	$('#updatable-content').load('Additional_Info/Company/about_company.html');
});

$('#tsdc').click(function (e) {
	$('#updatable-content').load('Additional_Info/TSDC/about_tsdc.html');
});

$('#tourist').click(function (e) {
	$('#updatable-content').load('Additional_Info/TSDC/about_travel.html');
});

$('#fila').click(function (e) {
	$('#updatable-content').load('Additional_Info/TSDC/about_fila.html');
});

$('#blog').click(function (e) {
	$('#updatable-content').load('Additional_Info/TSDC/about_tsdc.html');
});

$('#home-link').click(function (e) {
	$('#updatable-content').load('default.html');
});
