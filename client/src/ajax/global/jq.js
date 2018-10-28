$(document).ajaxStart(() => $('#isLoading').css('visibility', 'visible'));
$(document).ajaxStop(() => $('#isLoading').css('visibility', 'hidden'));
