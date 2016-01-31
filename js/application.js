$(document).ready(function () {
    changePage('home');

    $('.navitem').click(function () {
        changePage(this.id);
    });

    function changePage(id) {
        $('#content').load('pages/' + id + ".html").hide().fadeIn();
        window.scrollTo(0, 0);
    }

    $(window).scroll(function () {
        var ht = $('.block').parent().children('.txt').height();
        $('.block').height(ht);
        console.log($('.block').height());
    });
});