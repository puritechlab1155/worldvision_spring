$(document).on('click', '.nickname', function() {
    if($(".nickname").hasClass('on')){           
        $(".my_lyr").hide(); 
        $(".nickname").removeClass('on');
    } else {
        $(".nickname").addClass('on');
        $(".my_lyr").show(); 
    }
});
$(document).on('click', '.btn_myinfo', function() {
    if($(".btn_myinfo").hasClass('on')){           
        $(".my_lyr").hide(); 
        $(".btn_myinfo").removeClass('on');
    } else {
        $(".btn_myinfo").addClass('on');
        $(".my_lyr").show(); 
    }
});
$(document).on('body', 'click', function(e) {
    var $tgPoint = $(e.target);
    var $popCallBtn1 = $tgPoint.hasClass('nickname')
    var $popCallBtn2 = $tgPoint.hasClass('name')
    var $popCallBtn3 = $tgPoint.hasClass('btn_myinfo')
    if ( !$popCallBtn1 && !$popCallBtn2 && !popCallBtn3 ) {
        $(".my_lyr").hide(); 
        $(".nickname").removeClass('on');
        $(".btn_myinfo").removeClass('on');
    }
});