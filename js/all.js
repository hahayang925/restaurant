

$(document).ready(function(){

  //漢堡選單
  $('#burger_menu').on('click',function(e){
    e.preventDefault();
    $('#burger_menu').toggleClass('active');
    $('.top_menu').toggleClass('show');
  });

  //gotop效果
  $(window).scroll(function(){
    var target= $(window).scrollTop();
    //var right=$(window).scrollLeft();
    //var Pos= $('#footer').offset().top;
    if(600<target){
      //$('#go_top').animate({'right':'10px'},250);
      $('#go_top').fadeIn();
    }else{//$('#go_top').stop(true).animate({'right':'-60px'},250);
      $('#go_top').hide();
  }
  });

  //gotop clicl事件
  $('#go_top').on('click',function(){
    $('body').animate({scrollTop:0} , 1000);
  })
  //頁面滑動效果
  $('.topmenu').click(function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      $('body').animate({scrollTop:targetPos} , 600);
    });

//購物車加入最愛
$('.heart-o').on('click',function(e){
  e.preventDefault();
  $(this).children().toggleClass('fa fa-heart-o');
  $(this).children().toggleClass('fa fa-heart');
})

//購物車數量
$('.add_in').on('click',function(e){
  e.preventDefault();
  $(this).parent().parent().toggleClass('select_in');
  $(this).toggleClass('selected');
  var items= $('li[class=select_in]').length;
  $('#number').text(items);
})
})
