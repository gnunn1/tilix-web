    $(function () {
        $('.scroll a').bind('click', function (event) {
            var $anchor = $(this);
            if ($($anchor.attr("href")).length) {
                var element = $anchor.attr("href");
            }
            else {
                var element = "body";
            }
            $('body,html').stop().animate({
                scrollTop: $(element).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
         $('.row').each(function (index) {
            var max_height = 0;
            $(this).find('.one-third').each(function (index) {
                if($(this).outerHeight() > max_height)
              {
                max_height = $(this).outerHeight();
              }          
             });
            $(this).find('.one-third').css('min-height', max_height);
            max_height = 0;
        });
        $('.my-slider').unslider({
            autoplay: true
            , infinite: true
            , arrows: {
                prev: '<a class="unslider-arrow prev"> Previous </a>'
                , next: '<a class="unslider-arrow next">Next</a>'
            }
        });
        $(".tabs-content li[class='selected']").show();
        $(".tabs-navigation li a").click(function(event){
            $(".tabs-content li").hide();
            $(".tabs-navigation li").removeClass("selected");
            $(this).parent().addClass("selected");
            var tab_id = $(this).attr("data-content");
            $(".tabs-content li[data-content='" + tab_id + "']").show();
            event.preventDefault();
        });
         
    });
