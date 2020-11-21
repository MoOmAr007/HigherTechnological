$('.single').click(function(){
    $('.target').hide();
    $('#div'+$(this).attr('target')).show();
})
$(document).on('click','ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
})


