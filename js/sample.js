// jqueryは配列を取っている要素を配列化していろんなものを取得している
// これでDOM~ができるこれないとできない処理もあるよ
$(function(){
  $('#js-click-btn').on('click',function()
  {
    $(this).addClass('large-btn');
  })

// ボタンの色変更
  $('#js-hover-btn').mouseover(function(){
    // opacityのクラスを付与マウスオーバーした時
    $(this).addClass('opacity');

  }).mouseleave(function(){

    $(this).removeClass('opacity');

  });
  // console.log($('#js-hover-btn'));

// クリックで要素の表示非表示を切り替える
// 注意文を出したりできる
// 動きは揃えたほうがいいよ
// これでスマホメニューなども作れる
// ボタンに二つの機能をつけたい
// ボタンの中に分岐を書いて使用すればできるかも
  $('#js-show-btn').on('click',function(){

    $('#js-target-element').fadeIn(2000);

  });
  $('#js-hide-btn').on('click',function(){
  // 2秒かけてフェードアウトを実現する
  // fadeOutをslideUpなどにも変更可
  // slideDownなどなど
    $('#js-target-element').fadeOut(2000);

  });

  //要素の追加
  // 要素の前後（外側）に追加
  $('#js-add-btn').on('click', function() {
    // $(this).before('<li class="btn">ボタンの前に追加</li>');
    $(this).after('<li class="btn"></li>');
  });
  $('#js-add-btn2').on('click', function() {
  // $(this).prepend('<li>前</li>');
  // prependの反対
  $(this).append('<li>後</li>');

  });

  //toggleメニュー
  // $('','')で二つの要素を指定もできる
  // siblings同列にあるタグを指すthisは対象にならない
  $('.js-toggle').on('click', function() {
    $(this).toggleClass('on');
    // this以外の兄弟がトグルでスライドインするよ
    // １個１個がスライドイン、スライドアウトしている
    $(this).siblings().slideToggle();


  });

  // ハンバーガーメニュー

  $('.js-hamburger').on('click', function(){
    $(this).toggleClass('on');
  });

  // jsスクロール
  $('.js-scroll').on('click', function(){
    // 500はtopに行くまでの速さ、０はtopからの距離
    $('body,html').animate({scrollTop: 0}, 500);
    return false; //return?
  })

  // モーダル
  $('.js-modal').on('click', function(){
    // コンテンツフェードイン
    $('.modal-content').fadeIn('slow');
    // 背景フェードイン
    $('#modal-bg').fadeIn('slow');
  });
  $('.js-modal-close').on('click', function(){
    // コンテンツフェードアウト
    $('.modal-content').fadeOut(1000);
    // 背景フェードアウト
    $('#modal-bg').fadeOut(1000);
  })



});
