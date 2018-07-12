// $(document).ready(function(){
//     $('.postImage[data-type="backgroundPost"]').each(function(){
//         if ($('body').width() > 990) 
//         {
//             var $bgobj = $(this); // создаем объект
//             var $window = $(window);
//             $window.scroll(function() {
//                 var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
//                 // Присваиваем значение background-position
//                 var coords = 'center '+ yPos + 'px';
//                 // Создаем эффект Parallax Scrolling
//                 $bgobj.css({ backgroundPosition: coords });
//             });
//         };
//     });

//     $('.back[data-type="background"]').each(function(){
//         if ($('body').width() > 990) 
//         {
//             var $bgobj = $(this); // создаем объект
//             var $window = $(window);
//             $window.scroll(function() {
//                 var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
//                 // Присваиваем значение background-position
//                 var coords = 'center '+ yPos * 1 + 'px';
//                 // Создаем эффект Parallax Scrolling
//                 $bgobj.css({ backgroundPosition: coords });
//             });
//         };
//     });

// });