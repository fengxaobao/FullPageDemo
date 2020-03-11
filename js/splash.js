$(function () {
    var width = $(document).width()
    var height = $(document).height()
    var k = $(window).height(); // 当前屏幕的高度
    var section2ShafaAnimFinish = false
    $("#fullpage").fullpage({
        navigation: true,
        showActiveTooltip: true,
        scrollingSpeed: 1000,

        afterLoad: function (link, index) {

            if (index == 2 && $(".search_02").is(':hidden')) {

                $(".search_box").show().animate({"right": width * 0.5}, 1000, function () {
                    $(".search_word").show().animate({"opacity": 1}, 1000, function () {
                        $(".search_word").hide();
                        $(".search_box").hide();

                        $(".search_02").show().animate({
                            "height": 30,
                            "bottom": 450,
                            "left": width * 0.4
                        }, 1000, function () {

                        });
                        $(".search_03").show().animate({"right": width * 0.4 - 100, "height": 200}, 1000)
                        $(".search_04").show().animate({opacity: 1}, 1000, function () {
                            $(".desc").hide();

                        })

                    })
                })
            } else if (index == 3) {
                $(".shirt_03").show().animate({"top": height * 0.2}, 1000, function () {

                })
            } else if (index == 4) {

            }
        },

        /**
         *  在页面开始滚动的时候开始调用
         * @param index 当前的section
         * @param nextIndex 下一个section
         * @param direction 方向，向上或者向下
         */
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && !section2ShafaAnimFinish) {
                $(".cover").show();
                $(".shirt-02").show().animate({"bottom": 0}, 1000, function () {
                    section2ShafaAnimFinish = true;
                    $(".shirt-02").hide();
                });
            } else if ((index == 3 && nextIndex == 2 && section2ShafaAnimFinish) || (index == 1 && nextIndex == 2 && section2ShafaAnimFinish)) {


            } else if (index == 3 && nextIndex == 4) {

                $("._t1f1").show().animate({"left": width * 0.7, "bottom": 0}, 1000, function () {
                    $("._t1f1").hide()
                });
                $(".shirt_03").hide();
            } else if (index == 4 && nextIndex == 5) {
                // 小手上来
                $(".hand-05").animate({"bottom": 0}, 2000, function () {
                    // 鼠标显示
                    $(".mouse-05-a").animate({"opacity": 1});
                    // 沙发从 800 到  70
                    $(".t1f-05").show().animate({"bottom": 70}, 1000, function () {
                        // 单子上走 走完之后， 我们的文字翻转
                        $(".order-05").animate({"bottom": 390}, function () {
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });
                    })
                });
            } else if (index == 5 && nextIndex == 6) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function () {
                    $(".t1f-05").hide();
                });

                $(".box-06").animate({"left": "38%"}, 1500, function () {
                    $(this).animate({"bottom": 40}, 500, function () {
                        $(this).hide();

                        // 行走的过程就是 背景移动的过程
                        // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标
                        //
                        $(".section6").animate({"backgroundPositionX": "100%"}, 4000, function () {
                            // 当背景动画执行完毕  boy 大小复原
                            $(".boy").animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({"right": 500}, 500, function () {
                                    // 门显示出来 模拟打开门的效果
                                    $(".door").animate({"opacity": 1}, 200, function () {
                                        // 之后girl 显示出来
                                        $(".girl").show().animate({"right": 350, "height": 306}, 500, function () {
                                            $(".pop-07").show();
                                            $(".next").fadeIn();
                                        })
                                    });
                                });
                            });
                        });
                        // 光的速度
                        $(".words-06-a").show().animate({"left": "30%"}, 2000, "easeOutElastic");
                        //
                        $(".pop-06").show();
                    });
                });

            } else if (index == 6 && nextIndex == 7) {// 第6屏幕到第7屏幕过渡
                setTimeout(function () {
                    $(".star").animate({"width": 120}, 500, function () {
                        $(".good-07").show();
                        $(".next").fadeIn();
                    });

                }, 2000);
            }
            $(".beginShoping").hover(function () {
                $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
            });
            // 大手跟随鼠标移动
            $(document).mousemove(function (event) {
                var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠标在页面中的x坐标
                var y = event.pageY + 10;  // 获得鼠标在页面中的y坐标

                // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449
                var minY = k - 449;
                // 把 鼠标在页面中的坐标 给  hand 大手 left  top
                if (y < minY) {
                    y = minY;
                }

                $(".hand-08").css({"left": x, "top": y});
            });

            // 当我们点击 再来一次的 时候， 分两步进行
            $(".again").click(function (event) {
                // 1. 返回第1屏幕
                $.fn.fullpage.moveTo(1);
                // 2. 所有的动画都复原 就是原来没有看过的样子
                // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
                // 所有带有动画的div 盒子 添加 move 类名
                $("img, .move").attr("style", "");
            });
        }

    });


    $(".jumpShopping").click(function () {
        alert("跳转到商品详情")
    });
    $("div_1_jd_4").click(function () {
        $("#fullpage").moveSectionDown()
    });
})