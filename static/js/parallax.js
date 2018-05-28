$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        var $window = $(window);
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});