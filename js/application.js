$(document).ready(function () {
    $('nav').hide().fadeIn();
    var page = location.search.substring(1, 2000);
    if (page) {
        $('#content').load('/pages/' + page + '.html');
    } else {
        $('#content').load('/pages/home.html');
    }
    $('#content').fadeIn();
    $('nav').find('h3').click(function () {
        id = this.id
        $('#content').load('/pages/' + id + '.html').hide().fadeIn();
        window.history.pushState("string", "Title", "/?" + id);
    });

    $(document).on('click', '.category h1', function () {
        $(this).parent().children("p").slideToggle();
    })

    $(window).scroll(function () {
        $('.block').each(function () {
            var ht = $(this).parent().children('.txt').height();
            $(this).height(ht);
        });
    });
});