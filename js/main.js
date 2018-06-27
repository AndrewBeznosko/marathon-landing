$(document).ready(function(){

/**
 * main-menu__btn
 */
    $(".main-header__btn").on("click", function () {
        $(".main-header").toggleClass("active");
    });

});

$(document).ready(function(){

    $("#headermenu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


    // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube_sec-1', {
          height: '390',
          width: '100%',
          videoId: 'hbmlM8dVDio',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
       // event.target.playVideo();
           $('#sec-1_modal__video').on('show.bs.modal', function (event) { 

            player.playVideo();
           });
    
    $('#sec-1_modal__video').on('hidden.bs.modal', function (event) { 
        
        player.pauseVideo();
});
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      //var done = false;
   
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
        //  done = true;
        }
      }
//      function stopVideo() {
//        player.stopVideo();
//      }

    

   

