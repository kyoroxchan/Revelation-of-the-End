// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.bg_scale').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top + 300; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('isSmall');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('isSmall');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.getElementsByClassName('multiBtnToggle');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }
    function tabSwitch() {
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
}, false);

let slides = [
    { src: '../image/bg/pc_01.png' },
    { src: '../image/bg/pc_02.png' },
    { src: '../image/bg/pc_03.png' }
];


if (window.matchMedia("(max-width: 767px)").matches) {
    slides = [
        { src: '../image/bg/mb_01.png' },
        { src: '../image/bg/mb_02.png' },
        { src: '../image/bg/mb_03.png' }
    ];
}
$('#top').vegas({
    slides: slides,
    transition: 'fade',
    transitionDuration: 3000,
    delay: 18000,
    cover: true,
    animation: 'random',
    animationDuration: 10000,
    timer: true
});