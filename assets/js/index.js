$(function () {
    var lang = navigator.language || navigator.userLanguage;//常规浏览器语言和IE浏览器
    lang = lang.substr(0, 2);
    //语言自动切换
    if ($('[hreflang=' + lang + ']').length > 0) {
        window.location.href = '/' + lang;
    }
    setTimeout(() => {
        $('main.d-none').removeClass('d-none');
        $('div.spinner-container').remove();
    }, 1000);
})