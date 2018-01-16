(function() {
	'use strict';

	$('[data-toggle="tooltip"]').tooltip();
	//$('[data-toggle="popover"]').popover();

	$('#logoutlink').click(function() {
		$('#logout').submit();
		return false;
	});

})();
