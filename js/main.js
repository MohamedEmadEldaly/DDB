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
    //popup disappear when click some where else
    $('.popup').on('click', function(e){
        var myTarget = $(e.target);
        if(!myTarget.closest('.popup__content').length) {
            $('.popup').fadeOut();
        }
    });

    //popup appear add
    $('.add').on('click', function(){
        $('body').css('overflow', 'hidden');    
        $('.add-modal').fadeIn();
    });
    $('.cancel').on('click', function(e){
        e.preventDefault();
        $('body').css('overflow', 'auto');       
        $('.popup').fadeOut();
    });

    //edit modal
    $('.edit').on('click', function(){

        var child = $(this).parents('.table__body-row').children();
        
        $('#user1').val(child.eq(1).text());
        $('#pass1').val(child.eq(2).text());
        $('#email1').val(child.eq(3).text());
        $('.edit-select').val(child.eq(4).text());
        $('body').css('overflow', 'hidden');    
        $('.edit-modal').fadeIn();
        console.log(child.eq(4).text());

    });
    
    
    // add active class to select link
    $('.side-nav__item').on('click', function() {
        $(this).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');
    });
    //database tables
    $('.demo-foo-filtering').DataTable({
        "pageLength": 1
      });

    // select 
    $('.js-example-basic-single').select2();

      
    
    



});