//　アコーディオン実装
$('.js-accordion').click(function() {
    $(this).next().slideToggle();
    $(this).children('.p-faq__item__icon').toggleClass( 'p-faq__item__open' );
    $(this).toggleClass( 'p-faq__item__open');
});


// ハンバーガーメニュー実装

jQuery('.js-openbtn').click(function() { //
    jQuery(this).toggleClass('active'); // ボタン自身にactiveクラスを付与
    jQuery('#js-g-nav').toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

jQuery('#js-g-nav a').click(function() {
    jQuery('.js-openbtn').removeClass('active'); //ボタンのactiveクラスを削除
    jQuery('#js-g-nav').removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを削除
});

jQuery('#js-g-nav').click(function() { // 背面をクリックしたら解除する処置
    jQuery('.js-openbtn').removeClass('active');
    jQuery('#js-g-nav').removeClass('panelactive');
});