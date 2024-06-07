
$(function () {
    $('.btn_hamburger').on("click", function () {
        $('.menu_area').toggleClass('open');
        $('.btn_hamburger').toggleClass('open');  // メニューにopenクラスをつけ外しする
    });
});


//アコーディオンをクリックした時の動作
$('.nav_title').on('click', function () {//タイトル要素をクリックしたら
    $('.menu_detail').slideUp(500);//クラス名.menu_detailがついたすべてのアコーディオンを閉じる

    var findElm = $(this).next(".menu_detail");//タイトル直後のアコーディオンを行うエリアを取得

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去    
    } else {//それ以外は
        $('.close').removeClass('close'); //クラス名closeを全て除去した後
        $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
        $(findElm).slideDown(500);//アコーディオンを開く
    }
});
window.onorientationchange = function () {
    switch (window.orientation) {
        case 0:
            break;
        case 90:
            alert('画面を縦にしてください');
            break;
        case -90:
            alert('画面を縦にしてください');
            break;
    }
}