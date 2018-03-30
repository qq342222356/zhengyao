/**
 * Created by Lisa on 2018/3/28.
 */
var client=setInterval(function () {
    var width=document.body.clientWidth;
    if(width<980){
        $(".one").css("display","none");
        $(".two").css("display","block");
    }else {
        $(".one").fadeIn();
        $(".two").css("display","none");
    }
});
$(".two").click(function () {
    $("#menu").fadeIn();

});

var tp=$(".backTopCont div");
tp.css("display","none");
window.onscroll=function(){
    if($(window).scrollTop()>200){
        tp.show(800);
    }else if($(window).scrollTop()<200){
        tp.hide(800);
    }
}

setInterval(function(){
    var yScroll =$(".backTopCont div").offset().top;
    var top = $(document).scrollTop();
var tt=yScroll;
    $(".backTopCont>div").css({"top":top+"px","transition":"top 500"});
    });
    $(".backTopCont").css({"display":"block"});
    $(window).scroll(function () {//返回顶部滚动定位
        yScroll = (document.documentElement.scrollHeight > document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
        top = $(window).scrollTop() + $(window).height() - 2219;
        // if (top >= (yScroll-747)) {
        //     top=yScroll-747;
        // }
        $(".backTopCont>div").css("top", top + "px");
    });
    $(".backTopCont .GZH").hover(function(){
        $(".backTopCont .GZH>.GZH-show").css("padding","5px");
        $(".backTopCont .GZH>.GZH-show").stop().animate({"width":"320px","height":"174px"},300);
    },function(){
        $(".backTopCont .GZH>.GZH-show").stop().animate({"width":"0px","height":"0px"},300,function(){
            $(".backTopCont .GZH>.GZH-show").css("padding","0px");
        });
    });
    $.ajax({
        type: 'POST',
        url: "/indexCats",
        dataType: 'json',
        success: function(data){
            if(data){
                var html = "";
                for(var i=0;i < data.length;i++){
                    var obj = data[i];
                    html += '<li><a href="' + obj.url + '">'+obj.catName+'</a></li>';
                }
                $(".hCont > ul > .clear").before(html);
                $(".hCont ul li").each(function () {
                    $(this).click(function(){
                        $(".hCont ul li").css({"border-bottom":"none","color":"black"});
                        $(this).css({"border-bottom":"2px solid rgb(229,83,85)","color":"rgb(229,83,85)"});
                    })
                });
            }
        }
    });

$(".backTop").click(function () {//返回顶部
    $("body,html").stop().animate({scrollTop: 0}, 100);
});
// foot
// var img=$(".fMediaL a").toArray();
$(".fMediaL a").each(function (index,e) {
    this.click(function () {
      console.log(index);
    })
})





