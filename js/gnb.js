$(function () {
  var firstmenu = $("nav>ul>li"),
    header = $("header"),
    headerHeight = header.height();

  firstmenu.mouseenter(function () {
    firstmenu.find("ul").hide();
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").outerHeight();
    header.stop().animate({ height: submenuHeight + headerHeight}, 500);
  });
  firstmenu.mouseleave(function () {
    header.stop().animate({ height: headerHeight }, 500);
    $(this).find("ul").hide();
  });
});