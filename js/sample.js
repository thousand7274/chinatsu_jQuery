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
// if分で分岐したらメニューが作れるよ
  $('.js-hamburger').on('click', function(){
    $(this).toggleClass('on');
  });

  // console.log($('body,html').scrollTop());
  // console.log($(this).offset().top);
  // jsスクロール
  $('.js-scroll').on('click', function(){
    // 500はtopに行くまでの速さ、０はtopからの距離(px)
    // body,htmlいっぺんに設定できる
    // 移動距離はピクセル指定だけでなくjsで計算して指定する、ライブラリを使用することもできる
    // アニメーションはできないこともあるから毎回調べる
    $('body,html').animate({scrollTop: 0}, 500);
    // 上からの移動量が計算できる
    // $('body,html').animate({scrollTop: 
    //   $('#toggle').offset().top
    // }, 500);

    // $(this).offset().top
    
    return false; //なんかエラーを吐いた時のために処理を止めるためのものなくても動く保険みたいなもの
  })

  // モーダル
  $('.js-modal').on('click', function(){
    // コンテンツフェードイン
    // できれば秒数でやったほうがいい。これだと雑な感じがする
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

  // タブメニュー
  //?
  $('.tab-nav a').on('click', function(){
    // クリックしたaタグにactiveがついてたら処理しないよ
    // hasclassクラスを持っている
    if ($(this).hasClass('active')){
      return false;
    }//クリックしたらまずactiveを外す処理を作る
    $('.tab-nav a').removeClass('active');
    // 一旦外した後にまたclassをつけている
    $(this).addClass('active');
    // tabcontentもまずはactiveを外す
    $('.tab-content > div').removeClass('active');
    // hashはidのこと filterは検索ここではfilterについているhrefの#以降を探している
    // thisはクリック要素しか取れない
    // もしあった場合にactiveっていうクラスをつけるよってこと
    $('.tab-content > div').filter(this.hash).addClass('active');
    return false;
  })

  // スライダー
  // 大抵のスライダーはこんな作り
  // outerWidthスライダーのタグのwidth
  let slideWidth = $('.slide').outerWidth();
  let slideNum = $('.slide').length;//スライダーってタグが何個あるか
  let slideWrapperWidth = slideWidth * slideNum;//スライドのラッパー
  let currentSlide = 0;//このコードに何回進んだかっていうのを数えている
  $('.slide-wrapper').css('width',slideWrapperWidth);

  // 次へ
  $('next-slider').on('click', function(){
    // 最後のスライドだった場合
    // slidenumはスライドの数
    // slidenumは１個多いから-1
    if(currentSlide >= slideNum -1){
      // 処理を途中で止めてる
    return faluse;
    }
    currentSlide++;
    slide();
  });
  $('.prev-slider').on('click', function(){
    // 最初のスライドだった場合
    if(currentSlide <= 0){
      return false;
    }
    currentSlide--;
    slide();
  });
  function slide(){
    $('.slide-wrapper').stop().animate({
      left: currentSlide * -slideWidth
    });
  }



});
