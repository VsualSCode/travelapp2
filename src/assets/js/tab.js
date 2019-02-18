var Tab = function (navClass, boxClass, activeClass) {
    var navs = $("." + navClass);
    var boxs = $("." + boxClass);

    var init = function () {
        for(var i=0; i<navs.length; i++){
            $(navs[i]).removeClass(activeClass);
        }

        for(var j=0; j<boxs.length; j++){
            $(boxs[j]).hide();
        }
    };

    navs.on("click", function () {
        init();
        var id = $(this).data("toggle");
        $("#" + id).show();
        $(this).addClass(activeClass);
    })
}