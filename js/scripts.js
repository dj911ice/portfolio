/* global google, works */



//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=98273167461";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//twitter
// async src="//platform.twitter.com/widgets.js"
// charset="utf-8"

// google maps js api v3
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.3160276, lng: -83.1294822},
    zoom: 12
  });
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: '2631 Central Ave.\nDetroit, Michigan 48209\nUnited States of America'
  });
}

// document ready
$(document).ready(function(){
  // alert("Document is ready!");
  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function(){
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  //stellar
  $.stellar();

  //tooltips
  $(function () {
    $('#linkedin').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#button').on('click', function(){
    // console.log('clicked'); //capturing the on "click"
    var comment = $('.message-box').val();

    //text background conditional
    if($('.message-box').val() === "") {
      $('.message-box').css('border', '2px solid red');
    } else {
      $('#visible-comment').html(comment.toUpperCase());
      $('.message-box').hide(1125, function(){
        alert("Thank you for the message!\nWill be in contact shortly!\nHave a great day!");
      });
    };
    return false;
  });

  //keyup
  $('.message-box').on('keyup', function(){
    var charCount = $('.message-box').val().length;
    $('#char-count').html(charCount);

    if(charCount > 50) {
      $('#char-count').css("color", "red");
    } else {
      $('#char-count').css("color", "black");
    };
  });

  //work section
  for(var i = 0; i < works.length; ++i) {
    $('#work1').append("\
    <div class='col-md-3 col-sm-6 col-xs-12'>\
    <span class='info'><h4 class='proj-title'>" + works[i].title + "\
      "+works[i].code+"</h4>\
      </span>\
      <a href= " + works[i].url + " class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
      </a>\
      <span class='work-img tech-icon'><p>"+works[i].tech+ "</p></span>\
    </div>\
    ");

    $('.work-img').attr("target", "_blank");

    // $('.work-img').mouseenter(function(){
    //   $('.info', this).show();
    // }).mouseleave(function(){
    //   $('.info', this).hide();
    // });

    var images = $('#work1 img');
    if(i%2 === 0) {
      $(images[i]).css('border', '2px solid green');
    } else {
      $(images[i]).css('border', '2px solid purple');
    };
  };
  //ajax form
//   $.ajax({
//     url: "https://formspree.io/justin.p.dickerson@gmail.com", 
//     method: "POST",
//     data: {message: "Hello!"},
//     dataType: "json"
//   });

//   Devicons
  $('#dev-icons').append(created.devicons);
  $('#front-end').append(frontEnd.devicons);
  $('#back-end').append(backEnd.devicons);
  $('#database').append(database.devicons);
  $('#ver-dep').append(verdep.devicons);
});
  
