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
        $('#content').load(function () {})
        window.history.pushState("string", "Title", "/?" + id);
    });

    $(document).on('click', '.category h1', function () {
        $(this).parent().children("p").slideToggle();
    });

    $(window).scroll(function () {
        blockSizing();
        textCenter();
    });
});

function blockSizing() {
    $('.block').each(function () {
        var ht = $(this).parent().children('.txt').height();
        $(this).height(ht);
    });
}

function textCenter() {
    $('.slide > .cover').each(function () {
        var ht = $(this).children('p').height();
        $(this).css('padding-top', $(this).height() / 2 - ht / 2)
    })
}