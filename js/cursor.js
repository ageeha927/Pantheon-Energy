$(function() {
    for(let i = 0; i <= 10; i++) {
        $("body").append("<div class='circle'></div>");
    }
    $(".circle").css({
        "height": "24px",
        "width": "24px",
        "border-radius": "24px",
        "background-color": "black",
        "position": "absolute",
        "top": "0",
        "left": "0"
    })
    const coords = { x: 0, y: 0 };
    const circles = $(".circle");

    const colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e"
    ];

    circles.each(function (index, circle) {
        $(circle).data("x", 0);
        $(circle).data("y", 0);
        $(circle).css("background-color", colors[index % colors.length]);
    });

    $(window).mousemove(function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.each(function (index, circle) {
            $(circle).css("left", x - 12 + "px");
            $(circle).css("top", y - 12 + "px");
            $(circle).css("transform", "scale(" + (circles.length - index) / circles.length + ")");
            
            $(circle).data("x", x);
            $(circle).data("y", y);

            const nextCircle = circles.eq(index + 1).get(0) || circles.eq(0).get(0);
            x += ($(nextCircle).data("x") - x) * 0.3;
            y += ($(nextCircle).data("y") - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }

    animateCircles();
})