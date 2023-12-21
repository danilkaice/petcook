// массив с значениями объемов и цен
let kg = [2,  5, 10, 15];
let coast = [1300, 2300, 4200, 5100];
let kgCheak =+ 1;
// подключение действий на выбор объема
$('.kg:eq(1)').css('border', '1px solid #3881fe');
$('.kg').on('click', function(){
    // изменение стилей
    $('.kg').css('border', '1px solid lightgray');
    $(this).css('border', '1px solid #3881fe');
    // вывод стоимости
    $('.cost:eq(0)').text(coast[$(this).index()] + ' руб.');
    $('.cost:eq(1)').text((coast[$(this).index()] - 100) + ' руб.');
    // запись выбранного объема
    kgCheak =+ $(this).index();
});

// выбор количества
$('.countInp').val(2);
let count =+ 2;
$('.count img:eq(0)').on('click', function(){
    if($('.countInp').val() > 1){
        count--;
        $('.countInp').val(count);
    }
});
$('.count img:eq(1)').on('click', function(){
    count++;
    $('.countInp').val(count);
});

// расчет
let sum =+ 0;
$('.schetBtn').on('click', function(){
    sum =+ 0;
    if($('.dostRadBtn:eq(0)').is(':checked')){
        sum = (coast[kgCheak] * count) + 250;
        $('.coastInp').val(sum);
    } else if($('.dostRadBtn:eq(1)').is(':checked')){
        sum = (coast[kgCheak] - 100) * count;
        $('.coastInp').val(sum);
    }
});

// добавление в корзину
$('.bagBtn').on('click', function(){
    if($('.coastInp').val() != ''){
        alert('Ваш заказ успешно добавлен в корзину');
        $('.coastInp').val('');
    }
});