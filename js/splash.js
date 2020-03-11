$(function () {
    var width = $(document).width()

    var section2ShafaAnimFinish = false
    $("#fullpage").fullpage({
        navigation: true,
        showActiveTooltip: true,
        scrollingSpeed: 1000,

        afterLoad: function (link,index) {

            if(index== 2 && $(".search_02").is(':hidden')){

                $(".search_box").show().animate({"right":width*0.5},1000,function () {
                    $(".search_word").show().animate({"opacity":1},1000,function () {
                        $(".search_word").hide();
                        $(".search_box").hide();

                        $(".search_02").show().animate({"height":30,"bottom":450,"left":width*0.4},1000,function () {

                        });
                        $(".search_03").show().animate({"right":width*0.4-100,"height":200},1000)
                        $(".search_04").show().animate({opacity:1},1000,function () {
                            $(".desc").hide();

                        })

                    })
                })
            }else if(index == 3){
                $(".shirt_03").show().animate({"left":-width*0.4},1000,function () {

                })
            }
        },

        /**
         *  在页面开始滚动的时候开始调用
         * @param index 当前的section
         * @param nextIndex 下一个section
         * @param direction 方向，向上或者向下
         */
        onLeave: function (index,nextIndex,direction) {
          if(index==2 &&nextIndex == 3 && !section2ShafaAnimFinish){
              $(".cover").show();
              $(".shirt-02").show().animate({"bottom":0},1000,function () {
                  section2ShafaAnimFinish = true;
                  $(".shirt-02").hide();
              });
          }else if((index==3 &&nextIndex == 2&& section2ShafaAnimFinish)|| (index==1 &&nextIndex == 2&& section2ShafaAnimFinish)){
              $(".cover").show();

          }
        }
    });
    $(".jumpShopping").click(function () {
        alert("跳转到商品详情")
    });
    $("div_1_jd_4").click(function () {
        $("#fullpage").moveSectionDown()
    });
})