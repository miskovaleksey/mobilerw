//=require cookie.js

function pixelPerfect (imgUrl, opacity) {
  if (docCookies.getItem('pixel') === null) {
    return;
  }
  var overlay = $("<div></div>");
  var switcher = $("<div></div>");
  var height = $('body').height();
  var zIndex = 9999999999;
  var shown = docCookies.getItem('pixel') == 'true';
  overlay.attr('id', 'pixel-perfect-overlay');
  overlay.css({position: 'absolute',
               top: 0,
               left: 0,
               width: '100%',
               height: height,
               background: 'url('+imgUrl+') no-repeat 50% 0',
               zIndex: zIndex,
               pointerEvents: 'none',
               opacity: opacity});
  overlay.appendTo('body');

  switcher.attr('id', 'pixel-perfect-switcher');
  switcher.css({position: 'fixed',
                right:   0,
                top:    '50%',
                width:  '50px',
                height: '50px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: "#fff",
                marginTop: '-25px',
                zIndex: zIndex+1,
  });
  switcher.appendTo('body');

  switcher.on('click', function(event){
    event.preventDefault();
    toggle(!shown);
  });

  toggle(shown);

  function toggle (flag) {
    overlay.toggle(flag);
    docCookies.setItem('pixel', flag);
    shown = flag;
  }
}