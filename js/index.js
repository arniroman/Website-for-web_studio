
$(document).ready(function(){
    $('.sidebar-btn').click(function(){
        $('.sidebar').toggleClass('visible');
    });
});


jQuery(document).ready(function() {
        jQuery('.toggle-nav').click(function(e) {
            jQuery(this).toggleClass('active');
            jQuery('.menu__list').toggleClass('active');

            e.preventDefault();
        });

});





