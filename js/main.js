$(document).ready(function () {


                /**
                 * main-menu__btn
                 */
                $(".main-header__btn").on("click", function () {
                    $(".main-header").toggleClass("active");
                });

           

            $("#headermenu").on("click", "a", function (event) {
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
                //забираем идентификатор блока с атрибута href
                var id = $(this).attr('href'),
                    //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({
                    scrollTop: top
                }, 1000);
            });
        });

        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player, player1, player2, player3, player4, player5, player6;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube_sec-1', {
                height: '390',
                width: '100%',
                videoId: 'hbmlM8dVDio',
                events: {
                    'onReady': onPlayerReady
                    //'onStateChange': onPlayerStateChange
                }
            });

            player1 = new YT.Player('sec-5_video1', {
                height: '100%',
                width: '100%',
                videoId: 'iM4GnTIqrS4',
                events: {
                    'onReady': onPlayerReady
                }
            });

            player2 = new YT.Player('sec-5_video2', {
                height: '100%',
                width: '100%',
                videoId: '57WJ4dKqpfQ',
                events: {
                    'onReady': onPlayerReady
                }
            });

            player3 = new YT.Player('sec-5_video3', {
                height: '100%',
                width: '100%',
                videoId: '_yfqtgUKLOk',
                events: {
                    'onReady': onPlayerReady
                }
            });

            player4 = new YT.Player('sec-5_video4', {
                height: '100%',
                width: '100%',
                videoId: 'nJuaodqIGHI',
                events: {
                    'onReady': onPlayerReady
                }
            });

            player5 = new YT.Player('sec-5_video5', {
                height: '100%',
                width: '100%',
                videoId: '66PWPddYZH4',
                events: {
                    'onReady': onPlayerReady
                }
            });

            player6 = new YT.Player('sec-5_video6', {
                height: '100%',
                width: '100%',
                videoId: 'iGdaNKKt0p0',
                events: {
                    'onReady': onPlayerReady
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

//        function onPlayerStateChange(event) {
//            if (event.data == YT.PlayerState.PLAYING && !done) {
//                //setTimeout(stopVideo, 6000);
//                //  done = true;
//            }
//        }
     
