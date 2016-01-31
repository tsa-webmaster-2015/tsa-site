$(document).ready(function () {
    $('nav').hide().fadeIn();
    var page = location.search.substring(1, 2000);
    if (page) {
        $('#content').load('/pages/' + page + '.html');
    } else {
        $('#content').load('/pages/home.html');
    }
    $('#content').fadeIn();
    $('nav').find('span').click(function () {
        id = this.id
        $('#content').load('/partials/' + id + '.html').hide().fadeIn();
        window.history.pushState("string", "Title", "/?" + id);
    });


    $(window).scroll(function () {
        var ht = $('.block').parent().children('.txt').height();
        $('.block').height(ht);
        console.log($('.block').height());
    });
});