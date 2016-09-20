(function() {
	'use strict';
	//miei script progetto

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		);
		document.querySelector('head').appendChild(msViewportStyle);
	}

	var logoutLink = $('#logoutLink'),
		logoutForm = $('#logout');
	//thetoken = $('meta[name=csrf-token]').attr("content");
	logoutLink.click(function() {
		logoutForm.submit();
		return false;
	});

	function prova(al) {
		alert('ehi come va ' + al);
	}

})();
