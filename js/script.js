new WOW().init();

jQuery('a[href^="#"]').on('click', function(){
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr("href");
    var position = 0;
    if(id != '#'){
        var position = jQuery(id).offset().top - (header + 30);
    }

    jQuery('html, body').animate({
        scrollTop: position
    },
    500);
});

$(function(){
    $('.drawer-icon').click(function(e){
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
        $('.layer').toggleClass('is-active');
        
        return false;
    })
    
    $('.drawer-content_item a').click(function(e){
        e.preventDefault();
        
        $('.drawer-icon').toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
        $('.layer').toggleClass('is-active');

        return false;
    })

    $('.works-item').hover(function(e){
        e.preventDefault();
        
        $(this).children('.works-item_text').toggleClass('is-hover');
        $(this).children('.work-bg').toggleClass('is-hover');
        
        return false;
    })




    let $form = $( '#js-form' )
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
          $( '.long-line' ).addClass('is-submit')
          
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
          $( '.long-line' ).addClass('is-submit')
        }
      } 
    });
    return false; 
  }); 

//formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function(){
      if(
          $('#js-form input[type="text]').val() !== "" &&
          $('#js-form input[type="email]').val() !== ""&&
          $('#js-form input[name="entry.2132611191"]').val() !== ""
      ) {
          //全て入力されたとき
          $submit.prop('disabled', false)
          $submit.addClass('is-finish')
      } else{
          //入力されていないとき
        $submit.prop('disabled', true)
        $submit.removeClass('is-finish')
      }
  });
});