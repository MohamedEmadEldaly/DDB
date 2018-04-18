$(document).ready(function (){

    'use strict';
    //logout popup appear
    $('.user-nav__user').on('click', function (){
        $('.user-nav__logout').toggleClass('active');
    });
    //logout disappear when click some where else
    $(document).on('click', function(e){
        var myTarget = $(e.target);
        if(!myTarget.closest('.user-nav__user').length && !myTarget.closest('.user-nav__logout').length && $('.user-nav__logout').hasClass('active')) {
            $('.user-nav__logout').removeClass('active');
        }
    });
    // add active class to select link
    $('.side-nav__item').on('click', function() {
        $(this).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');
    });
    //database tables
    $('.demo-foo-filtering').DataTable({
        "pageLength": 1
      });

    // override style of tables
    
    
    



});