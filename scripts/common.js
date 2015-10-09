$(document).ready(function () {

    /************movieListCarousel*************/
    var smallerTriangleColor = '',
        biggerTriangleColor = '',
        slidingListId = document.getElementById('slidingList'),
        smallerTriangle = document.getElementsByClassName('smallerTriangleArrow')[0],
        biggerTriangle = document.getElementsByClassName('biggerTriangleArrow')[0],
        mLeft = 0,
        i = 1,
        len = $('#slidingList>li').length,
        j = 1,
        flag = true
        //slidingListWidth=parseInt(window.getComputedStyle(slidingListId).getPropertyValue('width'))-11
        ,
        biggerTriangleColor = window.getComputedStyle(document.getElementsByClassName('biggerTriangleArrow')[0]).getPropertyValue('border-color'),
        smallerTriangleColor = window.getComputedStyle(document.getElementsByClassName('smallerTriangleArrow')[0]).getPropertyValue('border-color');

    /*************************MovieList Carousel Arrows Initially***********************************************/

    $('#moviePosterPrev .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
    $('#moviePosterPrev .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");

    //console.log($('#slidingList>li').size());
    if ($('#slidingList>li').size() <= 1) {
        $('#moviePosterNext .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
        $('#moviePosterNext .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");
    }
    /*************************MovieList Carousel Arrows Initially Ends***********************************************/

    $('select option').css({
        'background-color': '#FF9500',
        'color': '#FFF'
    });

    /************************************MovieList Carousel****************************************************/
    function slider() {

        document.getElementsByClassName('moviePosterSeparatorParaLeft')[0].style.color = '#999';
        document.getElementsByClassName('moviePosterSeparatorParaRight')[len - 1].style.color = '#999';


        function arrowRightFunctionality() {
            if (flag == true) {
                slidingListWidth = parseInt(window.getComputedStyle(slidingListId).getPropertyValue('width')) - 11
                flag = false;
            }
            mLeft = parseInt($('#slidingList').css('marginLeft'));

            if (mLeft > -((len - 1) * slidingListWidth) && mLeft <= 0) {
                $('#slidingList').css('marginLeft', (mLeft - slidingListWidth) + "px");
            }

            if (mLeft <= -((len - 2) * slidingListWidth)) {
                $('#moviePosterNext .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
                $('#moviePosterNext .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");
                //console.log("next if " +mLeft +"|||||||||||"+((len-2)* slidingListWidth));
                $('#moviePosterPrev .biggerTriangleArrow').css("border-color", biggerTriangleColor);
                $('#moviePosterPrev .smallerTriangleArrow').css("border-color", smallerTriangleColor);
            } else {

                //$('#moviePosterPrev .biggerTriangleArrow').css("border-color",biggerTriangleColor);	
                //$('#moviePosterPrev .smallerTriangleArrow').css("border-color",smallerTriangleColor);	

                $('#moviePosterNext .biggerTriangleArrow').css("border-color", biggerTriangleColor);
                $('#moviePosterNext .smallerTriangleArrow').css("border-color", smallerTriangleColor);
                //console.log("next else " +mLeft+"|||||||||||"+((len-2)* slidingListWidth));	
            }
        }
        $('#moviePosterNext .arrowRight').click(arrowRightFunctionality);



        $('#moviePosterPrev .arrowLeft').bind('click', function () {
            if (flag == true) {
                slidingListWidth = parseInt(window.getComputedStyle(slidingListId).getPropertyValue('width')) - 11
                flag = false;
            }
            mLeft = parseInt($('#slidingList').css('marginLeft'));

            if (mLeft >= -((len - 1) * slidingListWidth) && mLeft < 0) {
                $('#slidingList').css('marginLeft', (mLeft + slidingListWidth) + "px");
            }

            if (mLeft >= 0 - slidingListWidth) {
                $('#moviePosterPrev .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
                $('#moviePosterPrev .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");
                //console.log("prev if " +mLeft+"|||||||||||"+((len-2)* slidingListWidth));
                $('#moviePosterNext .biggerTriangleArrow').css("border-color", biggerTriangleColor);
                $('#moviePosterNext .smallerTriangleArrow').css("border-color", smallerTriangleColor);
            } else {

                $('#moviePosterPrev .biggerTriangleArrow').css("border-color", biggerTriangleColor);
                $('#moviePosterPrev .smallerTriangleArrow').css("border-color", smallerTriangleColor);

                //$('#moviePosterNext .biggerTriangleArrow').css("border-color",biggerTriangleColor);	
                //$('#moviePosterNext .smallerTriangleArrow').css("border-color",smallerTriangleColor);	
                //console.log("prev else " +mLeft+"|||||||||||"+((len-2)* slidingListWidth));
            }

        });
    }
    /************************************MovieList Carousel****************************************************/


    /********************************Arrow colors Reset******************************************/

    function arrowColorReset() {
        mLeft = parseInt($('#slidingList').css('marginLeft'));
        console.log('arrowReset ' + mLeft);
        var flag = false;
        if (mLeft > 0 - slidingListWidth) {
            flag = true;
            $('#moviePosterPrev .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
            $('#moviePosterPrev .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");
        } else {
            $('#moviePosterPrev .biggerTriangleArrow').css("border-color", biggerTriangleColor);
            $('#moviePosterPrev .smallerTriangleArrow').css("border-color", smallerTriangleColor);

            $('#moviePosterNext .biggerTriangleArrow').css("border-color", biggerTriangleColor);
            $('#moviePosterNext .smallerTriangleArrow').css("border-color", smallerTriangleColor);
        }


        if (mLeft <= -((len - 2) * slidingListWidth)) {
            $('#moviePosterNext .biggerTriangleArrow').css("border-color", "transparent transparent transparent #999999");
            $('#moviePosterNext .smallerTriangleArrow').css("border-color", "transparent transparent transparent #666666");
        } else {
            if (flag == false) {
                $('#moviePosterPrev .biggerTriangleArrow').css("border-color", biggerTriangleColor);
                $('#moviePosterPrev .smallerTriangleArrow').css("border-color", smallerTriangleColor);
            }
            $('#moviePosterNext .biggerTriangleArrow').css("border-color", biggerTriangleColor);
            $('#moviePosterNext .smallerTriangleArrow').css("border-color", smallerTriangleColor);
        }
    }

    /********************************Arrow colors Reset Ends******************************************/

    /****************************color tone change by percentage**********************/

    function LightenDarkenColor(color, percent) {
        var usePound = false;
        if (color[0] == "#") {
            color = color.slice(1);
            usePound = true;
        }
        var Hexcode = parseInt(color, 16);
        var red = (Hexcode >> 16) + percent;

        if (red > 255) {
            red = 255;
        } else if (red < 0) {
            red = 0;
        }

        var blue = ((Hexcode >> 8) & 0x00FF) + percent;

        if (blue > 255) {
            blue = 255;
        } else if (blue < 0) {
            blue = 0;
        }

        var green = (Hexcode & 0x0000FF) + percent;

        if (green > 255) {
            green = 255;
        } else if (green < 0) {
            green = 0;
        }

        return (usePound ? "#" : "") + (green | (blue << 8) | (red << 16)).toString(16);
    }

    /****************************color tone change by percentage Ends**********************/

    /**************Themes Menu************************************/

    $('#themes').click(function () {

        $('#themeList').slideToggle();

    })

    /**************Themes Menu Ends********************************/

    /***************Theme Changing Functionality******************************************/

    $('#themeList li').click(function (e) {

        if (e.target.innerHTML == "CoolBlue") {
            less.modifyVars({
                '@orange': '#1BA1E2',
            });

            smallerTriangleColor = "transparent transparent transparent #1BA1E2";
            var NewColor = LightenDarkenColor("#1BA1E2", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#1BA1E2',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#1BA1E2',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        if (e.target.innerHTML == "CalmGreen") {
            less.modifyVars({
                '@orange': '#128428'
            });

            smallerTriangleColor = "transparent transparent transparent #128428";
            var NewColor = LightenDarkenColor("#128428", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#128428',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#128428',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        if (e.target.innerHTML == "SpiceRed") {
            less.modifyVars({
                '@orange': '#AA1010'
            });

            smallerTriangleColor = "transparent transparent transparent #AA1010";
            var NewColor = LightenDarkenColor("#AA1010", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#AA1010',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#AA1010',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        if (e.target.innerHTML == "FancyPink") {
            less.modifyVars({
                '@orange': '#C1004F'
            });

            smallerTriangleColor = "transparent transparent transparent #C1004F";
            var NewColor = LightenDarkenColor("#C1004F", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#C1004F',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#C1004F',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        if (e.target.innerHTML == "DustyBrown") {
            less.modifyVars({
                '@orange': '#A05000'
            });

            smallerTriangleColor = "transparent transparent transparent #A05000";
            var NewColor = LightenDarkenColor("#A05000", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#A05000',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#A05000',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        if (e.target.innerHTML == "RESET") {
            less.modifyVars({
                '@orange': '#FF9500'
            });

            smallerTriangleColor = "transparent transparent transparent #FF9500";
            var NewColor = LightenDarkenColor("#FF9500", 20);
            biggerTriangleColor = "transparent transparent transparent " + NewColor;

            $('select option').css({
                'background-color': '#FF9500',
                'color': '#FFF'
            });
            $('#bookNowBtn').css({
                'background-color': '#FF9500',
                'color': '#FFF'
            });

            arrowColorReset();
        }

        $('#themeList').css('display', 'none');

    });
    if ($('#slidingList>li').size() > 1) {
        slider();
    }
    /***************Theme Changing Functionality Ends******************************************/


    /***************************Book Now Button Click***********************/

    $('#bookNowBtn').mousedown(function () {
        $(this).css({
            'border': 'none'
        });
    })

    $('#bookNowBtn').mouseup(function () {
        $(this).css({
            'border': '3px solid #FFF'
        });
    })

    /***************************Book Now Button Click Ends***********************/


    /****************************moviePoster click*************************/

    $('.moviePoster').click(function () {

        $('#showsTabContent').css('display', 'block');
        $('#showsTab').css({
            'box-shadow': '0px 11px 40px 0px #555',
            '-moz-box-shadow': '0px 11px 40px 0px #555',
            '-ms-box-shadow': '0px 11px 40px 0px #555'
        });
        $('#moviesInfoTab').css({
            'box-shadow': '',
            '-moz-box-shadow': '',
            '-ms-box-shadow': ''
        });
        $('#moviesInfoTabContent').css('display', 'none');

        $('#showsTab').click(function () {
            $('#showsTabContent').css('display', 'block');
            $('#showsTab').css({
                'box-shadow': '0px 11px 40px 0px #555',
                '-moz-box-shadow': '0px 11px 40px 0px #555',
                '-ms-box-shadow': '0px 11px 40px 0px #555'
            });
            $('#moviesInfoTab').css({
                'box-shadow': '',
                '-moz-box-shadow': '',
                '-ms-box-shadow': ''
            });
            $('#moviesInfoTabContent').css('display', 'none');
        });

        $('#moviesInfoTab').click(function () {
            $('#moviesInfoTabContent').css('display', 'block');
            $('#moviesInfoTab').css({
                'box-shadow': '0px 11px 40px 0px #555',
                '-moz-box-shadow': '0px 11px 40px 0px #555',
                '-ms-box-shadow': '0px 11px 40px 0px #555'
            });
            $('#showsTab').css({
                'box-shadow': '',
                '-moz-box-shadow': '',
                '-ms-box-shadow': ''
            });
            $('#showsTabContent').css('display', 'none');
        });

    });

    /****************************moviePoster click Ends*************************/

});