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
            $('body').css('overflow', 'auto');
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

   
    
    
    /*// add active class to select link
    $('.side-nav__item').on('click', function() {
        $(this).addClass('side-nav__item--active').siblings().removeClass('side-nav__item--active');
    });*/


    //database tables
    $('.demo-foo-filtering').DataTable({
        "pageLength": 1
      });
    //product page


    //popup appear add
    $('.add').on('click', function(){
        $('body').css('overflow', 'hidden');    
        $('.add-product').fadeIn();
    });

    //date picker
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap',
        value : '01/01/2018'
    });
    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap',
        value : '05/01/2018'
    });

    $('#datepicker3').datepicker({
        uiLibrary: 'bootstrap',
        value : '01/01/2018'
    });
    $('#datepicker4').datepicker({
        uiLibrary: 'bootstrap',
        value : '05/01/2018'
    });

    $('#datepicker5').datepicker({
        uiLibrary: 'bootstrap',
        value : '05/01/2018'
    });

    $('#datepicker6').datepicker({
        uiLibrary: 'bootstrap',
        value : '10/01/2018'
    });
    
    // edit
    $(document).on('click','.edit', function(){

        var child = $(this).parents('.table__body-row').children();

        $('#Product_Name').val(child.eq(1).text());
        $('#Supplier').val(child.eq(2).text());
        $('#Employee_Name').val(child.eq(3).text());
        $('#datepicker3').val(child.eq(5).text());
        $('#datepicker4').val(child.eq(4).text());
        $('#pro_img').attr('src',child.eq(6).children('img').attr('src')); 

        console.log();


        $('.edit-modal').fadeIn();        
        $('body').css('overflow', 'hidden');    

    });

    //range
    $('input[name="daterange"]').daterangepicker();
});