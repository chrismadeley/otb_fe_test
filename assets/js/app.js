$(document).ready(function() {

    /* 
    	Toggles the 'show more hotel details' onclick
    */
    $('.otb__toggler').click(function() {

        var txt = $('.show_hide').is(':visible') ? 'more' : 'less';
        $(this).find('.more_or_less').text(txt);
        $(this).find('.otb__chevron').toggleClass('otb__chevron-down');
        $(this).parent().next('.show_hide').slideToggle();

    });

    /*
		Reorders the hotels based on price, name or star rating.
		TODO - add asc/desc ordering
    */

    $('.otb__sort li').click(function() {

        $('.otb__sort li').removeClass('active');
        $(this).addClass('active');

        var sortBy = $(this).data('sortby'),
            container = $('.wrapper');

        container.find('.sortable').sort(function(a, b) {

                if (sortBy == 'data-name') {

                    var x = a.getAttribute(sortBy),
                        y = b.getAttribute(sortBy);

                    return (x > y) ? 1 : ((x < y) ? -1 : 0);
                } else {
                    return +a.getAttribute(sortBy) - +b.getAttribute(sortBy);
                }
            })
            .appendTo(container);
    });

});